'use strict';

const request = require('../lib/http');

const deleteTweet = async (req, res) => {
    const tweetId = req.params.id || null;
    let response = {};
    if (tweetId) {
        try {
            response = await request({
                method: 'POST',
                uri: `https://api.twitter.com/1.1/statuses/destroy/${tweetId}.json`,
                resolveWithFullResponse: true,
                oauth: req.auth,

            })
            response.body = JSON.parse(response.body);
        }
        catch (err) {
            response.body = JSON.parse(err.response.body);
        };
    }
    else {
        response.body = { 'message': 'tweetId is empty' };
    }
    res.json(response.body);
};

module.exports = deleteTweet;