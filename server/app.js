const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
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

// pentru folosirea ejs-ului
// app.set('view engine', 'ejs');
// app.use(express.static(__dirname));

const users = require('./routes/api/users');
app.use('/api/users', users);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`) ;
    console.log('Press Ctrl+C to quit.')
});