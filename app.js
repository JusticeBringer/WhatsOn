const path = require('path');
const express = require('express');
/*include modulul express
memorand in variabila express obiectul asociat modulului(exportat de modul)*/
const app = express();

// #######################################################  Socket

// ########################################################## Pentru APP ##############################

//setez folderele statice (cele in care nu am fisiere generate prin node)
app.use('/css', express.static('css'));
app.use('/javascript', express.static('javascript'));
app.use('/app_files', express.static('app_files'));
app.use('/app_pictures', express.static('app_pictures'));
app.use('/uploads_from_user', express.static('uploads_from_user'));

// pentru folosirea ejs-ului
app.set('view engine', 'ejs');
app.use(express.static(__dirname));

// cand se face o cerere get catre pagina de index
app.get('/', function(req, res) {
    /*afiseaza(render) pagina folosind ejs (deoarece este setat ca view engine) */
    res.render('html/index');
});

app.get('/register', function(req, res) {
    res.render('html/register');
});

app.get('/login', function(req, res) {
    /*afiseaza(render) pagina folosind ejs (deoarece este setat ca view engine) */
    res.render('html/login');
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`) ;
    console.log('Press Ctrl+C to quit.')
});
console.log('Aplicatia se va deschide pe portul 8080.');