'use strict';

const express = require('express')
const bodyParser = require('body-parser');
const config = require('./config');
const app = express()

const auth = {
    consumer_key: config.get('consumer_key'),
    consumer_secret: config.get('consumer_secret'),
    token: config.get('token'),
    token_secret: config.get('token_secret'),
}
console.log(auth);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use((req, res, next) => {
    req.auth = auth;
    next();
})

const port = 3000
const router = require('./routes/external/twitter');

app.use('/tweet', router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})