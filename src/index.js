const express = require('express');
require('dotenv').config();
const routes = require('./Routers');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');


const app = express();
const port = 3000;

const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  baseURL: 'http://localhost:3000',
  clientID: 'lAc7oZl39yM1OXm4hOxJS7bKkyppEW0Z',
  issuerBaseURL: 'https://dev-n6mzinz2owdr1le8.us.auth0.com',
  secret: 'LONG_RANDOM_STRING'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// // req.isAuthenticated is provided from the auth router
// app.get('/', (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
// });


app.use(session({
  secret: 'petstore',
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
    res.redirect('/login');
  }
  res.render('profile', { user: req.oidc.user });
});

// 404 handler
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});