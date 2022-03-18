const express = require('express')
const router = express.Router()
const passport = require('passport')
const userController = require('../../controllers/user-controller')

router.get('/register', userController.registerPage)
router.post('/register', userController.register)
router.get('/login', userController.loginPage)
router.post('/login', passport.authenticate('local', { failureRedirect: '/users/login', failureFlash: true }), userController.login)

module.exports = router