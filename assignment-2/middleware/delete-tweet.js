// Tamanna Mehta
const request = require('../lib/http');

const deleteTweet = async (req, res) => {
  // Check require params exist
  const tweetId = req.params.id || null;
  let response = {};
  if (tweetId) {
    try {
      // Making Twitter Request
      response = await request({
        method: 'POST',
        uri: `https://api.twitter.com/1.1/statuses/destroy/${tweetId}.json`,
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
  // Sending Response to Client
  res.json(response.body);
};

module.exports = deleteTweet;
// Tamanna Mehta