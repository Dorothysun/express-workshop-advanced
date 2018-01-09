// Where you will connect your other routers
var express = require('express');
var router = express.Router();

var body = require('body-parser');
router.use(body.json());


router.use('/users', require('./user.js'));
router.use('/tweets', require('./tweet.js'));

router.get('/', function(req,res,next){
  res.send("hello");
});

module.exports = router;
