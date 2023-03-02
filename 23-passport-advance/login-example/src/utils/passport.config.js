const passport = require('passport');
const local = require('passport-local');
const UsersModel = require('../models/user.model');
const { hashPassword } = require('./bcrypt');
const { STRATEGY_REGISTER } = require('./constants');
const jwt = require('passport-jwt');
const { PRIVATE_KEY } = require('./jwt');

const JWTStrategy = jwt.Strategy;
const JWTExtractJwt = jwt.ExtractJwt;

//username y password

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['cookie-token'];
  }
  console.log({ token });
  return token;
};

const InitPassport = () => {
  passport.use(
    'jwt',
    new JWTStrategy(
      {
        jwtFromRequest: JWTExtractJwt.fromExtractors([cookieExtractor]),
        secretOrKey: PRIVATE_KEY,
      },
      async (jwt_payload, done) => {
        try {
          console.log({ jwt_payload });
          return done(null, jwt_payload);
        } catch (error) {
          console.log(error);
          done(error);
        }
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
  // //session el _id
  // passport.serializeUser((user, done) => {
  //   done(null, user._id);
  // });
  // //desencriptacion el _id
  // passport.deserializeUser(async (id, done) => {
  //   const user = await UsersModel.findById(id);
  //   done(null, user);
  // });
};

module.exports = InitPassport;
