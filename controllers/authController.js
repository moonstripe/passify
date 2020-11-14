const jwt = require('jsonwebtoken');
const signUpEmail = require('./mailerController');
const welcomeEmail = require('../templates/welcomeEmail');
const {
  insertUserToDb
} = require('../model/userOrm');

const tokenForUser = (id) => {
  return jwt.sign({
    sub: id,
    iat: new Date().getTime()
  }, process.env.JWT_SECRET);
};

module.exports = {
  signInApi: (req, res) => {
    console.log('I AM THE LOGGED IN USER', req.user);
    res.json(tokenForUser(req.user.id));
  },
  signUpApi: async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    try {
      const user = await insertUserToDb(email, password);
      res.json(tokenForUser(user.id));
      signUpEmail(welcomeEmail, email);
      // console.log(email);
      // console.log(welcomeEmail);
    } catch (e) {
      console.log(e);
      res.status(400)
        .json(e);
    }
  },
};
