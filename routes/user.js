const express = require('express');
var users = require('../userStorage.js');
var router = express.Router();

router.get('/', function (req, res, next) {
  console.log(req.query.minSalary);
  var alluser = users.getAllUsers();
  console.log(alluser)
  var minSalary = req.query.minSalary;
  if(minSalary){
    alluser = alluser.filter(function (user) {
      return user.salary > minSalary
    });
    console.log(alluser);
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
  if (!req.body.name || !req.body.age || !req.body.salary ) {
    console.log("missing");
  }
  res.end();
});

module.exports = router
