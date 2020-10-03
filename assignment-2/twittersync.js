var auth = {
  consumer_key: "kBQeeaEs1mfiM0qMxg0bv3PVA",
  consumer_secret: "6e2m7XezuaBveEzCVgqplaWSCZbKrYCIx7f8Vam06esCSPysuh",
  token: "1307495152768806912-SjwPixAe8BVBLgp8pRGY7y8ul14Bwj",
  token_secret: "xGJfhA0R97E4alGrIxji1U8imLWnYVW1IBKR7jLt2vweY",
};

var tweetId;
var bodyFromResponse;
var rp = require("request-promise");

const options = {
  method: "POST",
  uri: "https://api.twitter.com/1.1/statuses/update.json",
  qs: {
    status: "Hello Twitter",
  },
  auth: auth,
};

rp(options)
  .then(function (response) {
      console.log("S")
    console.log(response);
    // resolved
  })
  .catch(function (err) {
    // rejected
  });

console.log("id global " + tweetId);
console.log("body global " + bodyFromResponse);
