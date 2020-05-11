var app = require('./app')

pool = app.connect_pool()
app.find_friends(pool, 41).then(result => {console.log(result)})