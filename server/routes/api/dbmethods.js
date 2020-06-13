module.exports = {
    connect_pool: function(){
        var mysql = require('mysql');
        var pool = mysql.createPool({
            connectionLimit: 5,
            host: "eu-cdbr-west-03.cleardb.net",
            user: "b42cb5c849c08b",
            password: "19dca6ce",
            database: "heroku_c51823e5cbd41df"
        });
        return pool
    },
    get_users: function(pool){
        return new Promise(function(resolve, reject){
            var sql = "select * from users";
            pool.query(sql, function(err, result){
                if(err){
                    throw reject(err)
                }
                else{
                    if(result.length === 0){
                        return false
                    }
                    else{
                        return resolve(result)
                    }
                }
            })
        })
    },
    add_user: function(pool, email, password, username){
        var sql = "insert into users (email, password, username) values (?, ?, ?)";
        var values = [email, password, username]
        pool.query(sql, values, function (err, result) {
            if (err) throw err;
            console.log("Adaugat user nou");
        });
    },
    is_user: function(pool, email, password){
        return new Promise(function(resolve, reject){
            var sql = "select * from users where email = ? and password = ?";
            var values = [email, password];
            pool.query(sql, values, function(err, result){
                if(err){
                    throw reject(err)
                }
                else{
                    if(result.length == 0){
                        return false
                    }
                    else{
                        return resolve(result[0])
                    }
                }
            })
        })
    },
    change_username: function(pool, id, new_username){
        var sql = "update users set username = ? where id = ?"
        var values = [new_username, id]
        pool.query(sql, values, function(err, result){
            if(err)
                throw err
            else
                console.log("Username changed for id" + id)
        })
    },
    change_email: function(pool, id, new_email){
        var sql = "update users set email = ? where id = ?"
        var values = [new_email, id]
        pool.query(sql, values, function(err, result){
            if(err)
                throw err
            else
                console.log("Email changed for id: " + id)
        })
    },
    change_password: function(pool, id, new_password){
        var sql = "update users set password = ? where id = ?"
        var values = [new_password, id]
        pool.query(sql, values, function(err, result){
            if(err)
                throw err
            else
                console.log("Password changed for id" + id)
        })
    },
    find_user: function(pool, username){
        return new Promise(function(resolve, reject){
            var sql = "select * from users where username = ?";
            var values = [username];
            pool.query(sql, values, function(err, result){
                if(err){
                    throw reject(err)
                }
                else{
                    if(result.length == 0){
                        return false
                    }
                    else{
                        return resolve(result)
                    }
                }
            })
        })
    },
    add_friend: function(pool, id_sender, id_friend){
        var sql = "insert into friends (user_id_1, user_id_2) values (?, ?)";
        var values = [id_sender, id_friend]
        pool.query(sql, values, function (err, result) {
            if (err) throw err;
            console.log("Adaugat prietenie noua");
        });
    },
    find_friends: function(pool, id){
        return new Promise(function(resolve, reject){
            var sql ="SELECT * FROM users WHERE users.id IN" +
                "( SELECT user_id_1 FROM friends WHERE user_id_2 = ? UNION SELECT user_id_2 FROM friends WHERE user_id_1 = ?)";
            var values = [id, id];
            pool.query(sql, values, function (err, result) {
                if(err){
                    throw reject(err)
                }
                else{
                    if(result.length === 0){
                        return false
                    }
                    else{
                        return resolve(result)
                    }
                }
            })
        });
    }
};