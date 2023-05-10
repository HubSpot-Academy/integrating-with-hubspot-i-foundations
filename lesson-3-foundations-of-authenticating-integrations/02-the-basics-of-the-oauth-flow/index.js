require('dotenv').config();
const express = require('express');
const querystring = require('querystring');
const axios = require('axios');
const session = require('express-session');

const app = express();

app.set('view engine', 'pug');

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

const REDIRECT_URI = `http://localhost:3000/oauth-callback`;

const authUrl = ``;

const tokenStore = {};

app.use(session({
    secret: Math.random().toString(36).substring(2),
    resave: false,
    saveUninitialized: true
}));

// * 1. Send user to authorization page. This kicks off initial requeset to OAuth server.
// * 2. Get temporary authorization code from OAuth server.
// * 3. Combine temporary auth code wtih app credentials and send back to OAuth server.
// * 4. Get access and refresh tokens.

app.listen(3000, () => console.log('App running here: http://localhost:3000'));

