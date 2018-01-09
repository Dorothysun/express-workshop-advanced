const express = require('express');
var users = require('../userStorage.js');
var router = express.Router();

router.get('/:name', function (req, res, next) {
  // console.log(req.query());
  var name = req.params.name
  console.log(name);
  console.log(users.getUserByName(name));
  res.send(users.getUserByName(name));
});

module.exports = router
