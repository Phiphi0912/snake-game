const userServices =require('../services/user-services')

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
    req.flash('success_messages', '成功登入！')
    res.redirect('/home')
  }
}


module.exports = userController