var express = require('express');
var app = express();

var things = require('./things.js');

app.use('/things', things);



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