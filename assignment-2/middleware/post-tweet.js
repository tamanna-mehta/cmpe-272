'use strict';

const request = require('../lib/http');

const postTweet = async (req, res) => {
    const tweet = req.body.tweet || null;
    let response = {};
    if (tweet) {
        try {
            response = await request({
                method: 'POST',
                uri: `https://api.twitter.com/1.1/statuses/update.json?status=${tweet}`,
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
        response.body = { 'message': 'Response is empty' };
    }
    res.json(response.body);
};

module.exports = postTweet;