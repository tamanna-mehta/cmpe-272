const nock = require('nock');
const assert = require('clutch-assert');

const postTweet = require('../middleware/post-tweet');
const getTweet = require('../middleware/get-tweet');

nock('https://api.twitter.com')
  .get('/1.1/statuses/show.json?id=123')
  .reply(200, { status: 'OK' });

describe('Testing twitter Api', () => {

  it('test get tweet', async () => {
    const req = {
      params: { id: '123' }
    }
    const res = {
      json: function (body) {
        assert.is(body.status, 'OK');
      }
    }

    await getTweet(req, res);
  });

  it('test post tweet', async () => {
    const req = {
      body: {}
    }
    const res = {
      json: function(body) {
        assert.is(body.message, 'Response is empty');
      }
      
    }
    await postTweet(req, res);
  });

});
