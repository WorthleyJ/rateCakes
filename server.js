
var express = require('express');

var app = express();


var session = require('express-session');

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser({extended : true}))
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
const flash = require('express-flash')
app.use(flash())
app.use(express.static( __dirname + '/public/dist/public' ));



require("./server/config/routes.js")(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
})