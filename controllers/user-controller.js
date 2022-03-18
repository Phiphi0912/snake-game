const userServices =require('../services/user-services')

const userController = {
  registerPage: (req, res) => {
    res.render('register')
  },
  register: (req, res, next) => {
    userServices.login(req, (err, data) => {
      if (err) return next(err)

      req.flash('success_messages', '成功註冊帳號！')
      res.redirect('/login')
    })
  },
  loginPage: (req, res) => {
    res.render('login')
  }
}


module.exports = userController