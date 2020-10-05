const convict = require('convict');

const config = convict({
  consumer_key: {
    doc: 'Twitter Api key',
    format: String,
    default: null,
    env: 'CONSUMER_KEY',
  },
  consumer_secret: {
    doc: 'Twitter Api secret',
    format: String,
    default: null,
    env: 'CONSUMER_SECRET',
  },
  token: {
    doc: 'Twitter User token',
    format: String,
    default: null,
    env: 'TOKEN',
  },
  token_secret: {
    doc: 'Twitter User token secret',
    format: String,
    default: null,
    env: 'TOKEN_SECRET',
  },
});
// Perform validation
config.validate({ allowed: 'strict' });

module.exports = config;
