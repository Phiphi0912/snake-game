const userServices = require('../services/user-services')

const userController = {
  registerPage: (req, res) => {
    res.render('register')
  },
  register: (req, res, next) => {
    const { name, email, password, confirmPassword } = req.body
    userServices.login(name, email, password, confirmPassword, (err, data) => {
      if (err) return next(err)

      req.flash('success_msg', '成功註冊帳號！')
      res.redirect('/users/login')
    })
  },
  loginPage: (req, res) => {
    res.render('login')
  },
  login: (req, res) => {
    req.flash('success_msg', '成功登入！')
    res.redirect('/home')
  },
  logout: (req, res) => {
    req.flash('success_msg', '成功登出！')
    req.logout()
    res.redirect('/users/login')
  },
  saveScore: async (req, res, next) => {
    const userId = req.user.id
    const score = req.body.score
    try {
      await userServices.saveScore(userId, score)

      req.flash('success_msg', '成功儲存分數!')
      res.redirect('/home')
    } catch (err) {
      next(err)
    }
  }
}


module.exports = userController