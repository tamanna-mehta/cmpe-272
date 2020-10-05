const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const config = require('./config');

const app = express();
const router = require('./routes/external/twitter');

const port = 3000;

// Getting Twitter Oauth Information
const auth = {
  consumer_key: config.get('consumer_key'),
  consumer_secret: config.get('consumer_secret'),
  token: config.get('token'),
  token_secret: config.get('token_secret'),
};

// Allows Express to parse JSON body in Request and Response
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());
app.use((req, res, next) => {
  req.auth = auth;
  next();
});

// Bharath Gunasekaran Start
app.get('/', function (req, res) {
    res.sendFile(path.join(`${__dirname}/static/html/index.html`));
})
// Adding routes to server
app.use('/tweet', router);

// Starting server
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Twitter app listening at http://localhost:${port}`);
});
// Bharath Gunasekaran End

