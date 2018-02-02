var express = require('express');
var router = express.Router();



router.get('/:names/:id([0-9]{5})', function(req, res){
	res.send("Get "+req.params.names+" and "+req.params.id);
});

router.post('/', function(req, res){
	res.send("Post Routes and Shit");
});


module.exports = router; 