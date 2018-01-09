// Where you will connect your other routers
var express = require('express');
// var volleyball = require('volleyball');
// var bodyParser = require('body-parser');
// var app = express();
var router = express.Router();
//
// app.use(volleyball);
// app.use(bodyParser.json());
//
// app.use('/api',function(){
//   console.log("here");
//   res.end();
// })


router.get('/', function(req,res,next){
  res.send("hello");
});

module.exports = router;
