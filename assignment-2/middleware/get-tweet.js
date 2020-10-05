// Tamanna Mehta
const request = require('../lib/http');

const getTweet = async (req, res) => {
  // Checking if required param exist
  const tweetId = req.params.id || null;
  let response = {};
  if (tweetId) {
    try {
      // Making Twitter Request
      response = await request({
        method: 'GET',
        uri: `https://api.twitter.com/1.1/statuses/show.json?id=${tweetId}`,
        resolveWithFullResponse: true,
        oauth: req.auth,

      });
      response.body = JSON.parse(response.body);
    } catch (err) {
      response.body = JSON.parse(err.response.body);
    }
  } else {
    response.body = { message: 'tweetId is empty' };
  }
  // Sending response to client
  res.json(response.body);
};

module.exports = getTweet;
// Tamanna Mehta
