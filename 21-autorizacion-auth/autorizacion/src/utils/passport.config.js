const passport = require('passport');
const local = require('passport-local');
const UsersModel = require('../models/user.model');
const { createHash } = require('./bcrypt');
const GitHubStrategy = require('passport-github2');

const LOCAL_STRATEGY = local.Strategy;

const inicialize = () => {
  passport.use(
    'github',
    new GitHubStrategy(
      {
        clientID: 'Iv1.4d3d060c6d7cee35',
        clientSecret: 'ebcfb1952dd4917fa8a9002292a67fe87c031bab',
        callbackURL: 'http://localhost:8080/api/session/calback',
        tokenURL: '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',
      },
      function (accessToken, refreshToken, profile, done) {
        console.log(profile);
        done(null, profile);
      }
    )
  );
  passport.use(
    'register',
    new LOCAL_STRATEGY(
      {
        passReqToCallback: true,
        usernameField: 'email',
        passwordField: 'password',
      },
      async (req, username, password, done) => {
        const { first_name, last_name, age } = req.body;
        try {
          let user = await UsersModel.findOne({ email: username });
          if (user) {
            done(null, false);
          } else {
            const newUser = {
              first_name,
              last_name,
              age,
              email,
              password: createHash(password),
            };
            const user = await UsersModel.create(newUser);
            done(null, user);
          }
        } catch (e) {
          done(e);
        }
      }
    )
  );
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });
  passport.deserializeUser(async (id, done) => {
    const user = await UsersModel.findById(id);
    done(null, user);
  });
};

module.exports = inicialize;
