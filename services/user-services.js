const bcrypt = require('bcryptjs')
const { User } = require('../models')

const userServices = {
  login: (name, email, password, confirmPassword, cb) => {
    if (!name || !email || !password || !confirmPassword) throw new Error('所有欄位皆為必填')
    
    if (password !== confirmPassword) throw new Error('兩者密碼不相符')

    return User.findOne({ where: { email } })
      .then(user => {
        if (user) throw new Error('此信箱已被註冊')

        return bcrypt.hash(password, 10)
      })
      .then(hash => User.create({
        name,
        email,
        password: hash
      }))
      .then(user => cb(null, { user }))
      .catch(err => cb(err))
  }
}

module.exports = userServices