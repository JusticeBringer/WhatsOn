const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const formidable = require("formidable");


const app = express();

app.use(express.static(__dirname + '/views'));
const router = express.Router();

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
    secret: 'abcdefg',//folosit de express session pentru criptarea id-ului de sesiune
    resave: true,
    saveUninitialized: false
}));

app.set('view engine', 'ejs');

//Get users
app.get('/', async (req, res) => {
    const users = await loadUsers();
    res.send(await users);
});

//Login page
app.get('/login', function (req, res) {
    res.render('login');
});

app.post('/login', function (req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, async function (err, fields, files) {
        let usr = await is_user_login(fields.email, fields.password);

        if (usr){
            res.render('account');
        }
        else{
            res.render('login');
        }
    });

});

//Profile page
app.get('/account', function (req, res) {
    res.render('account');
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
        else{

            let em = req.body.email;
            let ps = req.body.password;
            let user = {em, ps};
            req.session.username=user; //setez userul ca proprietate a sesiunii

            app.get('/account', function (req, res) {
                res.render('account');
            });
            res.render('account');
        }
    }
    else if (req.body.valueCase === 3){ //redirecting

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

