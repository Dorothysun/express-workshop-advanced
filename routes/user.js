const express = require('express');
var users = require('../userStorage.js');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.send('these are the users');
});

module.exports = router
