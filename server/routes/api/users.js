const express = require('express');

const router = express.Router();

//Get users
router.get('/', async (req, res) => {
    const users = await loadUsers();
    res.send(await users);
});

router.post('/', async (req, res) => {
    console.log(req.body);

    if  (await is_user(req.body.email) !== false){
       res.status(400).send();
    }
    else{
        insertUser(req.body.email, req.body.password, req.body.username);
        res.status(201).send();
    }
});

async function loadUsers(){
    const app = require('./dbmethods');
    let pool = app.connect_pool();

    return app.get_users(pool).then(result => {
        return result;
    });
}

function insertUser(email, password, username){
    const app = require('./dbmethods');
    let pool = app.connect_pool();

    var sql = "insert into users (email, password, username) values (?, ?, ?)";
    var values = [email, password, username];
    pool.query(sql, values, function (err) {
        if (err)
            throw err;
        console.log("Adaugat user nou");
    });
}

async function is_user (email){
    const app = require('./dbmethods');
    let pool = app.connect_pool();

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

module.exports = router;