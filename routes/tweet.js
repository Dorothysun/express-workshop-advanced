const express = require('express');
var users = require('../userStorage.js');
var tweets = require('../tweetStorage.js');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.send(tweets.getAllTweets());
});


router.post('/', function (req, res, next) {
  
});

module.exports = router;
