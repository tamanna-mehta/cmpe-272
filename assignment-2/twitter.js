var request = require("request");

var auth = {
    consumer_key: "kBQeeaEs1mfiM0qMxg0bv3PVA",
    consumer_secret: "6e2m7XezuaBveEzCVgqplaWSCZbKrYCIx7f8Vam06esCSPysuh",
    token: "1307495152768806912-SjwPixAe8BVBLgp8pRGY7y8ul14Bwj",
    token_secret: "xGJfhA0R97E4alGrIxji1U8imLWnYVW1IBKR7jLt2vweY",
};

var tweetId;
var aPromise = new Promise(function (resolve, reject) {
    request.post(
        "https://api.twitter.com/1.1/statuses/update.json?status=Building my first tweet using twitter Rest API",
        {
            oauth: auth,
        },
        function (err, resp, body) {
            if (err) {
                reject(err);
            } else {
                resolve(body);
               // console.log(body);
                var jsonBody = JSON.parse(body);
                tweetId = jsonBody.id_str;
                //console.log("local ID " + tweetId);
            }
        }
    );
});

aPromise
    .then(function () {
        console.log("Getting tweet with ID: " + tweetId);
        getTweet(tweetId);
    }).then(function () {
        console.log("Deleting tweet with ID: " + tweetId);
        deleteTweet(tweetId);
    })
    .catch(function () {
        console.log("Some error has occured");
    });

function deleteTweet(tweetId) {
 //   console.log("Tweet ID for deletion " + tweetId);
    request.post(
        "https://api.twitter.com/1.1/statuses/destroy/" + tweetId + ".json",
        {
            oauth: auth,
        },
        function (err, res, body) {
            var jsonBody = JSON.parse(body);
            console.log("Tweet deleted with text: "+jsonBody.text);
        }
    );
}
function getTweet(tweetID) {
  //  console.log("Tweet ID to get tweet " + tweetId);
    request.get(
        "https://api.twitter.com/1.1/statuses/show.json?id=" + tweetId,
        {
            oauth: auth,
        },
        function (err, res, body) {
            var jsonBody = JSON.parse(body);
            console.log("Tweet is:   " + jsonBody.text);
        }
    );
}
