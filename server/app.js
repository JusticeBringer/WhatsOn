const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const formidable = require("formidable");
const redis = require('redis');
const { find_user } = require('./routes/api/dbmethods');
const redisStore = require('connect-redis')(session);
const client  = redis.createClient();
const app = express();

app.use(express.static(__dirname + '/views'));

app.use(bodyParser.json());

app.use(cors());

const http = require('http').Server(app);
const io = require('socket.io')(http);

let clients = 0;

io.on('connection', function (socket) {
    console.log("Clients: ", clients);

    socket.on("NewClient", function () {
        if (clients < 2) {
            if (clients === 1) {
                this.emit('CreatePeer')
            }
        }
        else
            this.emit('SessionActive');
        clients++;
    });
    socket.on('Offer', SendOffer);
    socket.on('Answer', SendAnswer);
    socket.on('disconnect', Disconnect)
});

function Disconnect() {
    if (clients > 0) {
        if (clients <= 2)
            this.broadcast.emit("Disconnect");
        clients--;
    }
}

function SendOffer(offer) {
    this.broadcast.emit("BackOffer", offer)
}

function SendAnswer(data) {
    this.broadcast.emit("BackAnswer", data)
}


// #######################################################  Socket

// ########################################################## Pentru APP ##############################

//setez folderele statice (cele in care nu am fisiere generate prin node)
// app.use('/css', express.static('css'));
// app.use('/javascript', express.static('javascript'));
// app.use('/app_files', express.static('app_files'));
// app.use('/app_pictures', express.static('app_pictures'));
// app.use('/uploads_from_user', express.static('uploads_from_user'));

app.post('/addfriend', function (req, res) {
    var form = new formidable.IncomingForm();

    form.parse(req, async function (err, fields, files) {
        let user1 = await is_user(fields.newFriend);
        if(user1){
            console.log(fields.user, fields.newFriend);
            const app_ld = require('./routes/api/dbmethods');
            let pool = app_ld.connect_pool();
            console.log(user1, user1.id);
            let user2 = await is_user(fields.user);
            console.log("A: ", user2.id);
            app_ld.add_friend(pool, user1.id, user2.id);
        }
    });

    res.redirect("login");
});

//setez o sesiune
app.use(session({
    secret: 'ssshhhhh',
    // create new redis store.
    store: new redisStore({ host: 'localhost', port: 6379, client: client, ttl : 260}),
    saveUninitialized: false,
    resave: false
}));

app.set('view engine', 'ejs');

//Static files
app.use('/javascript', express.static('javascript'));
app.use('/cssforejs', express.static('css'));

//Get users
app.get('/', async (req, res) => {
    const users = await loadUsers();
    res.send(await users);
});

//Login page
app.get('/login', function (req, res) {
    res.render('login');
});

//logout page
app.get('/logout', function(req, res) {
    req.session.destroy();//distrug sesiunea cand se intra pe pagina de logout
    res.render('logout');
});

//logout page
app.get('/video', function(req, res) {
    console.log("In video page", req.session.user.id);

    let id = req.session.user.id;
    let friends_s = dict[id];

    res.render('video', {user: req.session.user, friends: friends_s});
});

var dict = {};

app.post('/login', function (req, res) {
    var form = new formidable.IncomingForm();

    console.log("In login");

    form.parse(req, async function (err, fields, files) {
        let usr = await is_user_login(fields.email, fields.password);

        if (usr){

            await make_user_on(usr.id);

            let id = usr.id;
            let email = usr.email;
            let password = usr.password;
            let username = usr.username;
            let onoff = usr.ONOFF;
            let incall = usr.INCALL;

            let usertt = {id, email, password, username, onoff, incall};

            let friends_s = await loadFriends(usr.id);

            dict[id] = friends_s;
            // console.log(friends_s);

            req.session.user = usertt;
            req.session.friends = friends_s;
            console.log(req.session.user);


            res.render('account', {user: req.session.user, friends: req.session.friends});
        }
        else{
            res.render('login');
        }
    });

});

//Profile page
app.get('/account', function (req, res) {
    console.log("In acc: ", req.session.user);
    if(req.session.user){
        // user can access account page
        let sess = req.session;
        //console.log(sess);
        let fr = dict[sess.user.id];
        console.log("Hey", fr);

        res.render('account', {user: sess.user, friends: fr});
    }
    else{
        // user cannot access account page
        res.render('login');
    }
});

app.post('/account', function (req, res) {
    console.log("In acc Heyey: ", req.body.name);

});

//Value 1 is registration
//Value 2 is login
app.post('/', async (req, res) => {
    //console.log(req.body);

    if (req.body.valueCase === 1){ //registration
        if  (await is_user_registration(req.body.email) !== false){
            res.status(400).send();
        }
        else{
            insertUser(req.body.email, req.body.password, req.body.username);
            res.status(201).send();
        }
    }
    else if (req.body.valueCase === 2){ //logging in
        if  (await is_user_login(req.body.email, req.body.password) === false){
            res.status(400).send();
        }
    }
    else{ //we dont know what happened
        res.status(400).send();
    }
});

async function loadUsers(){
    const app_ld = require('./routes/api/dbmethods');
    let pool = app_ld.connect_pool();

    return app_ld.get_users(pool).then(result => {
        return result;
    });
}

async function loadFriends(id){
    const app_ld = require('./routes/api/dbmethods');
    let pool = app_ld.connect_pool();

    return app_ld.find_friends(pool, id).then(result => {
        return result;
    });
}

function insertUser(email, password, username){
    const app_ld = require('./routes/api/dbmethods');
    let pool = app_ld.connect_pool();

    var sql = "insert into users (email, password, username) values (?, ?, ?)";
    var values = [email, password, username];
    pool.query(sql, values, function (err) {
        if (err)
            throw err;
        console.log("Adaugat user nou");
    });
}

async function is_user_registration (email){
    const app_ld = require('./routes/api/dbmethods');
    let pool = app_ld.connect_pool();

    return new Promise(function(resolve, reject){
        let sql = "select * from users where email = ?";
        let values = [email];
        pool.query(sql, values, function(err, result){
            if(err){
                throw reject(err)
            }
            else{
                if(result.length === 0){
                    return resolve(false);
                }
                else{
                    return resolve(result[0]);
                }
            }
        })
    })
}

function is_user(username){
    const app_ld = require('./routes/api/dbmethods');
    let pool = app_ld.connect_pool();

    return new Promise(function(resolve, reject){
        app_ld.find_user(pool, username).then(result => {
            if(result == false){
                return resolve(false);
            }
            else{
                return resolve(result[0]);
            }
        })
    })
}

async function is_user_login (email, password){
    const app_ld = require('./routes/api/dbmethods');
    let pool = app_ld.connect_pool();

    return new Promise(function(resolve, reject){
        var sql = "select * from users where email = ? and password = ?";
        var values = [email, password];
        pool.query(sql, values, function(err, result){
            if(err){
                throw reject(err)
            }
            else{
                if(result.length === 0){
                    return resolve(false);
                }
                else{
                    return resolve(result[0]);
                }
            }
        })
    })
}

async function make_user_on(id) {
    const app_ld = require('./routes/api/dbmethods');
    let pool = app_ld.connect_pool();

    await app_ld.make_on(pool, id);
}


const PORT = process.env.PORT || 5000;

http.listen(PORT, () => console.log(`Active on ${PORT} PORT`));
// app.listen(PORT, () => {
//     console.log(`App listening to ${PORT}....`) ;
//     console.log('Press Ctrl+C to quit.')
// });

