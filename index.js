var express = require('express');
var app = express();
app.use(express.static('public'));
app.use(express.static('css'));
app.use(express.static('scripts'));
app.set('view engine', 'pug');
app.set('views', './views');

var things = require('./things.js');

app.use('/things', things);


app.get('/first_template', function(req, res){
   res.render('first_view');
});

app.get('/dynamic_view', function(req, res){
	res.render('dynamic', {
		name:'Google',
		url:'http://www.google.com'
		, user : { name: "Adi", age: "20"}
	})
});

app.get('/components', function(req, res){
    res.render('content');
});

app.get('*', function(req,res){
	res.send("Invalid Url");
});

// app.get('/', function(req, res){
// 	res.send("Hello World!");
// });

// app.get('/home', function(req,res){
// 	res.send("Hello World Baby!")
// });

// app.post('/hello', function(req,res){
// 	res.send("You just called the post method at '/hello'!\n");
// });
var d = new Date();
console.log(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());

app.listen(3000);