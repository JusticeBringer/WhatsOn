import axios from 'axios';

const url = 'http://localhost:5000/api/users';

export default class UserService{
    //Get Users
    static getUsers() {
        return new Promise((resolve, reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                resolve(
                    data.map(user => ({
                        ...user,
                        user
                    }))
                );
            }).catch((err) => {
                reject(err)
            })
        });
    }
}