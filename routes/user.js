const express = require('express');
var users = require('../userStorage.js');
var router = express.Router();


router.get('/', function (req, res, next) {
  console.log(req.query.minSalary);
  var alluser = users.getAllUsers();
  console.log(alluser)
  var minSalary = req.query.minSalary;
  var maxAge = req.query.maxAge;
  if (minSalary){
    alluser = alluser.filter(function (user) {
      return user.salary > minSalary
    });
    console.log(alluser);
  }
  if (maxAge) {
    alluser = alluser.filter(function (user) {
      return user.age <= maxAge;
    })
  }
  res.send(alluser);
});


router.get('/:name', function (req, res, next) {
  // console.log(req.query());
  var name = req.params.name;
  console.log(name);
  console.log(users.getUserByName(name));
  res.send(users.getUserByName(name));
});



router.post('/', function(req, res, next){
  var errorMessage = "Sorry you screwed up";

  if (!req.body.name || !req.body.age || !req.body.salary ) {
    var err = new Error(errorMessage);
    next(err);
  }else{
    console.log(req.body);
    res.send(users.createUser(req.body.name,req.body.age,req.body.salary));
  }
});

router.post('/', function (error, req, res, next) {
  console.log("omg you look so good today 😍");
  res.status(400).send("Bad request: not enough params");
});
module.exports = router
