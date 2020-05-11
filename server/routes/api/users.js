const express = require('express');

const router = express.Router();

//Get posts
router.get('/', async (req, res) =>{
    const app = require('./dbmethods');
    pool = await app.connect_pool();

    app.get_users(pool).then(result =>{
        res.send(result);
    });
});

router.post('/', (req, res) =>{
    const app = require('./dbmethods');
    pool = app.connect_pool();


});

module.exports = router;