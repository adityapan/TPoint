var express = require('express');
var router = express.Router();



router.get('/', function(req, res){
	res.send("Get Routes and Shit");
});

router.post('/', function(req, res){
	res.send("Post Routes and Shit");
});



module.exports = router; 