const session = require('express-session');

module.exports = session({
    secret: '!$ToCoOl$100599', // Replace with a secret key for session encryption
    resave: false,
    saveUninitialized: true,
  });