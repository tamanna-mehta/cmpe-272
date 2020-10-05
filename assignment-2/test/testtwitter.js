// Tamanna Mehta
const nock = require('nock');
const assert = require('clutch-assert');

const postTweet = require('../middleware/post-tweet');
const getTweet = require('../middleware/get-tweet');
const deleteTweet = require('../middleware/delete-tweet');
const getAllTweets = require('../middleware/get-all-tweets');
// Mocking get tweet calls
nock('https://api.twitter.com')
  .get('/1.1/statuses/show.json?id=123')
  .reply(200, { status: 'OK' });

nock('https://api.twitter.com')
  .get('/1.1/statuses/show.json?id=124')
  .reply(400, { status: 'BAD REQUEST' });

// Mocking post tweet calls
nock('https://api.twitter.com')
  .post('/1.1/statuses/update.json?status=valid')
  .reply(200, { status: 'OK' });

nock('https://api.twitter.com')
  .post('/1.1/statuses/update.json?status=duplicate')
  .reply(400, { status: 'BAD REQUEST' });

// Mocking delete tweet calls
nock('https://api.twitter.com')
  .post('/1.1/statuses/destroy/123.json')
  .reply(200, { status: 'OK' });

nock('https://api.twitter.com')
  .post('/1.1/statuses/destroy/124.json')
  .reply(400, { status: 'BAD REQUEST' });

// Mocking get all tweet calls
nock('https://api.twitter.com')
  .get('/1.1/statuses/user_timeline.json')
  .reply(200, { status: 'OK' });

describe('Testing twitter Api', () => {
  it('test get tweet with valid ID', async () => {
    const req = {
      params: { id: '123' },
    };
    const res = {
      json(body) {
        assert.is(body.status, 'OK');
      },
    };

    await getTweet(req, res);
  });

  it('test get tweet with invalid ID', async () => {
    const req = {
      params: { id: '124' },
    };
    const res = {

      json(body) {
        assert.is(body.status, 'BAD REQUEST');
      },
    };

    await getTweet(req, res);
  });

  it('test get tweet with empty ID', async () => {
    const req = {
      params: {},
    };
    const res = {

      json(body) {
        assert.is(body.message, 'tweetId is empty');
      },
    };

    await getTweet(req, res);
  });

  it('test post tweet with valid tweet', async () => {
    const req = {
      body: {
        tweet: 'valid',
      },
    };
    const res = {
      json(body) {
        assert.is(body.status, 'OK');
      },

    };
    await postTweet(req, res);
  });

  it('test post tweet with duplicate tweet', async () => {
    const req = {
      body: {
        tweet: 'duplicate',
      },
    };
    const res = {
      json(body) {
        assert.is(body.status, 'BAD REQUEST');
      },

    };
    await postTweet(req, res);
  });

  it('test post tweet with no tweet', async () => {
    const req = {
      body: {},
    };
    const res = {
      json(body) {
        assert.is(body.message, 'Response is empty');
      },

    };
    await postTweet(req, res);
  });

  it('test delete tweet with valid ID', async () => {
    const req = {
      params: { id: '123' },
    };
    const res = {
      json(body) {
        assert.is(body.status, 'OK');
      },
    };

    await deleteTweet(req, res);
  });

  it('test delete tweet with invalid ID', async () => {
    const req = {
      params: { id: '124' },
    };
    const res = {

      json(body) {
        assert.is(body.status, 'BAD REQUEST');
      },
    };

    await deleteTweet(req, res);
  });

  it('test delete tweet with empty ID', async () => {
    const req = {
      params: {},
    };
    const res = {

      json(body) {
        assert.is(body.message, 'tweetId is empty');
      },
    };

    await deleteTweet(req, res);
  });

  it('test get all tweets', async () => {
    const req = {
    };
    const res = {

      json(body) {
        assert.is(body.status, 'OK');
      },
    };

    await getAllTweets(req, res);
  });
});

// Tamanna Mehta