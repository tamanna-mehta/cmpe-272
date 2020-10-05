const nock = require('nock');
const assert = require('assert');
const express = require('express');
const request = require('supertest');
const index = require('../config/index');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use('/', index);

nock('https://api.twitter.com/1.1/statuses/show.json')
  .get('/', { id: '123' })
  .reply(200, { status: 'OK' });

describe('Testing twitter get', () => {
  it('test get tweet', () => {
    request(app)
      .get('/twitter')
      .expect('contents', done);
  });

  it('should return 9', () => {
    assert.equal(3 * 3, 9);
  });
});
