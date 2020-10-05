const express = require('express');

const postTweet = require('../../middleware/post-tweet');
const deleteTweet = require('../../middleware/delete-tweet');
const getTweet = require('../../middleware/get-tweet');

const twitter = express.Router();

twitter.get('/', (req, res) => {
  res.send('Hello World!');
});

// Routes for creating, getting, and deleting a tweet
twitter.post('/update', postTweet);

twitter.post('/delete/:id', deleteTweet);

twitter.get('/:id', getTweet);

module.exports = twitter;
