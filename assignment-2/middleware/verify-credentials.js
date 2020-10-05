// Tamanna Mehta
'use strict';

const request = require('../lib/http');

const verifyCredentials = async (req, res) => {
    // Checking if required param exist
    let response = {};
    try {
        // Making Twitter Request
        response = await request({
            method: 'GET',
            uri: `https://api.twitter.com/1.1/account/verify_credentials.json`,
            resolveWithFullResponse: true,
            oauth: req.auth,

        })
        response.body = JSON.parse(response.body);
    }
    catch (err) {
        response.body = JSON.parse(err.response.body);
    };

    // Sending response to client
    res.json(response.body);
};

module.exports = verifyCredentials;
// Tamanna Mehta
