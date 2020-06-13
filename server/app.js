const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const formidable = require("formidable");
const redis = require('redis');
const redisStore = require('connect-redis')(session);
const client  = redis.createClient();
const app = express();

app.use(express.static(__dirname + '/views'));

app.use(bodyParser.json());
app.use(cors());



// #######################################################  Socket

// ########################################################## Pentru APP ##############################

//setez folderele statice (cele in care nu am fisiere generate prin node)
// app.use('/css', express.static('css'));
// app.use('/javascript', express.static('javascript'));
// app.use('/app_files', express.static('app_files'));
// app.use('/app_pictures', express.static('app_pictures'));
// app.use('/uploads_from_user', express.static('uploads_from_user'));

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

app.post('/login', function (req, res) {
    var form = new formidable.IncomingForm();

    form.parse(req, async function (err, fields, files) {
        let usr = await is_user_login(fields.email, fields.password);

        if (usr){

            let id = usr.id;
            let email = usr.email;
            let password = usr.password;
            let username = usr.username;

            let usertt = {id, email, password, username};

            let friends_s = await loadFriends(usr.id);
            console.log(friends_s);

            req.session.user = usertt;
            console.log(req.session.user);

            res.render('account', {user: req.session.user, friends: friends_s});
        }
        else{
            res.render('login');
        }
    });

});

//Profile page
app.get('/account', function (req, res) {
    console.log(req.session.user);
    if(req.session.user){
        // user can access account page
        let sess = req.session;
        console.log(sess);

        res.render('account', {user: sess.user});
    }
    else{
        // user cannot access account page
        res.render('login');
    }
});

//Value 1 is registration
//Value 2 is login
app.post('/', async (req, res) => {
    console.log(req.body);

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


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`) ;
    console.log('Press Ctrl+C to quit.')
});

