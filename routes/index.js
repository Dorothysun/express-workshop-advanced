// Where you will connect your other routers
var express = require('express');
var router = express.Router();

router.use('/users', require('./user.js'));

router.get('/', function(req,res,next){
  res.send("hello");
});

module.exports = router;
