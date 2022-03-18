const express = require('express')
const router = express.Router()
const userController = require('../../controllers/user-controller')

router.get('/register', userController.registerPage)
router.post('/register', userController.register)
router.get('/login', userController.loginPage)

module.exports = router