const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const { User } = require('../models')
const bcrypt = require('bcryptjs')
const user = require('../models/user')

module.exports = app => {
  app.use(passport.initialize())
  app.use(passport.session())

  passport.use(new LocalStrategy(
    {
      usernameField: 'email',
      passReqToCallback: true
    },
    (req, email, password, done) => {
      User.findOne({ where: { email } })
        .then(user => {
          if (!user) return done(null, false, req.flash('error_msg', '帳號或密碼輸入錯誤'))

          bcrypt.compare(password, user.password)
            .then(result => {
              if (!result) return done(null, false, req.flash('error_msg', '帳號或密碼輸入錯誤'))

              return done(null, user)
            })
        })
        .catch(err => done(err))
    }))

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    user.findByPk(id)
      .then(user => done(null, user.toJSON())
      .catch(err => done(err)))
  })
}