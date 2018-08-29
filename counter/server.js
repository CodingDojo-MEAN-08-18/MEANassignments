var express = require("express");
var path = require("path");

var app = express();

app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var count = 0;

app.get('/', function(req, res) {
    
    res.redirect("/index");
})

app.get('/index', function(req, res) {
    count += 1;
    res.render('index');
});

app.get("style.css", function(req, res){
	res.render("/static/style.css");
})

app.post('/add2', function(req, res) {
    count += 2;
    res.redirect('/');
});

app.post('/reset', function(req, res) {
    count = 0;
    res.redirect('/');
});

app.listen(7077, function() {
 console.log("listening on port 7077");
});