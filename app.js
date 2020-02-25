const express = require('express');
/*include modulul express
memorand in variabila express obiectul asociat modulului(exportat de modul)*/
var app = express();

const session = require('express-session');

// initializari socket.io
const http=require('http');
const socket = require('socket.io');
const server = new http.createServer(app);
var  io= socket(server);
io = io.listen(server);//asculta pe acelasi port ca si serverul

//setez o sesiune
app.use(session({
    secret: 'abcdefg',//folosit de express session pentru criptarea id-ului de sesiune
    resave: true,
    saveUninitialized: false
}));

var conexiune_index;
io.on("connection", (socket) => {
    console.log("Esti pe server!");
    conexiune_index=socket;
    socket.on('disconnect', () => {conexiune_index=null;console.log('Nu mai esti pe server')});
});



// ########################################################## Pentru APP ##############################

// pentru folosirea ejs-ului
app.set('view engine', 'ejs');
app.use(express.static(__dirname));

//setez folderele statice (cele in care nu am fisiere generate prin node)
app.use('/css', express.static('css'));
app.use('/javascript', express.static('javascript'));
app.use('/app_files', express.static('app_files'));
app.use('/app_pictures', express.static('app_pictures'));
app.use('/uploads_from_user', express.static('uploads_from_user'));

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



var PORT = process.env.PORT || 8080;
server.listen(PORT);
console.log('Aplicatia se va deschide pe portul 8080.');