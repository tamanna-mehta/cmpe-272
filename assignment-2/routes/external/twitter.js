const express = require('express');

const postTweet = require('../../middleware/post-tweet');
const deleteTweet = require('../../middleware/delete-tweet');
const getTweet = require('../../middleware/get-tweet');
const verifyCredentials = require('../../middleware/verify-credentials');
const getAllTweets = require('../../middleware/get-all-tweets');

const twitter = express.Router();

// Routes for creating, getting, and deleting a tweet
twitter.post('/update', postTweet);

twitter.post('/delete/:id', deleteTweet);

twitter.get('/:id', getTweet);

twitter.get('/', verifyCredentials);

twitter.get('/all/:id', getAllTweets);

module.exports = twitter;
