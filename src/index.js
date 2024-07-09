const express = require('express');
require('dotenv').config();
const routes = require('./Routers');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const { auth } = require('express-openid-connect');

const app = express();
const port = process.env.PORT || 3000;

const config = {
  authRequired: false,
  auth0Logout: true,
  baseURL: process.env.BASE_URL || 'http://localhost:3000',
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  secret: process.env.SESSION_SECRET,
  routes: {
    callback: '/callback'
  }
};

app.use(auth(config));

app.use(session({
  secret: config.secret,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// View
app.set('views', path.join(__dirname, 'Views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/profile', (req, res) => {
  if (!req.oidc.isAuthenticated()) {
    return res.redirect('/login');
  }
  res.render('profile', { user: req.oidc.user });
});

// 404 handler
app.use((req, res) => {
  res.status(404).render('404', { url: req.url });
});

app.listen(port, () => {
  console.log(`Server is running on ${config.baseURL}`);
}).on('error', (err) => {
  console.error('Error starting server:', err);
});