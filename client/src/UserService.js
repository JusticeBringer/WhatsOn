import axios from 'axios';

const url = 'http://localhost:5000';

export default class UserService{
    //Get Users
    static getUsers() {
        return new Promise((resolve, reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                resolve(
                    data
                );
            }).catch((err) => {
                reject(err)
            })
        });
    }

    //Add user
    static insertUser(email, password, username, valueCase){
        return axios.post(url, {
            email, password, username, valueCase
        }).catch((err) => {
            console.log(err);
        })
    }

    //Login user
    static loginUser(email, password, valueCase){
        return axios.post(url, {
            email, password, valueCase
        })
    }

    //Delete user
    static deleteUser(id){
        return axios.delete(`${url}${id}`);
    }

    //See if user is already in database
    static is_user(pool, email, password){
        return new Promise(function(resolve, reject){
            var sql = "select * from users where email = ? and password = ?";
            var values = [email, password];
            pool.query(sql, values, function(err, result){
                if(err){
                    throw reject(err)
                }
                else{
                    if(result.length === 0){
                        return false
                    }
                    else{
                        return resolve(result[0])
                    }
                }
            })
        })
    }

    //Add user to database
    static add_user(pool, email, password, username){
        var sql = "insert into users (email, password, username) values (?, ?, ?)";
        var values = [email, password, username];
        pool.query(sql, values, function (err) {
            if (err)
                throw err;
            console.log("Adaugat user nou");
        });
    }


}