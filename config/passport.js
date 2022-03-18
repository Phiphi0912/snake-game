const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const { User } = require('../models')
const bcrypt = require('bcryptjs')

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passReqToCallback: true
  },
  (req, email, password, cb) => {
    User.findOne({ where: { email } })
      .then(user => {
        if (!user) return cb(null, false, req.flash('error_msg', '帳號或密碼輸入錯誤'))

        bcrypt.compare(password, user.password)
          .then(result => {
            if (!result) return cb(null, false, req.flash('error_msg', '帳號或密碼輸入錯誤'))

            return cb(null, user)
          })
      })
      .catch(err => cb(err))
  }))

passport.serializeUser((user, cb) => {
  cb(null, user.id)
})

passport.deserializeUser((id, cb) => {
  User.findByPk(id)
    .then(user => cb(null, user.toJSON()))
    .catch(err => cb(err))
})

module.exports = passport