const passport = require('passport');
const local = require('passport-local');
const UsersModel = require('../models/user.model');
const { hashPassword } = require('./bcrypt');
const { STRATEGY_REGISTER } = require('./constants');
const GithubStrategy = require('passport-github2');

//username y password
const InitPassport = () => {
  passport.use(
    'github',
    new GithubStrategy(
      {
        clientID: 'Iv1.7ca64f3d195547f1',
        clientSecret: '7c1735f99f3ea44693392b8b5c431435443dbc0e',
        callbackURL: 'http://localhost:8080/api/session/callbackGithub',
      },
      (accessToken, refreshToken, profile, done) => {
        console.log(profile);
        done(null, profile);
      }
    )
  );

  passport.use(
    STRATEGY_REGISTER,
    new local.Strategy(
      {
        passReqToCallback: true,
        usernameField: 'email',
        passwordField: 'password',
      },
      async (req, username, password, done) => {
        const { first_name, last_name, age } = req.body;
        try {
          const userExist = await UsersModel.findOne({ email: username });
          if (userExist) {
            done(null, false);
          } else {
            const hash = await hashPassword(password);
            const user = await UsersModel.create({
              first_name,
              last_name,
              age,
              email: username,
              password: hash,
            });
            done(null, user);
          }
        } catch (error) {
          console.log(error);
          done(error);
        }
      }
    )
  );
  //session el _id
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });
  //desencriptacion el _id
  passport.deserializeUser(async (id, done) => {
    const user = await UsersModel.findById(id);
    done(null, user);
  });
};

module.exports = InitPassport;
