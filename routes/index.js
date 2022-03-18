const express = require('express')
const router = express.Router()
const { authenticator } = require('../middleware/auth')

const home = require('./modules/home')
const user = require('./modules/user')

const { errorHandler } = require('../middleware/errorHandler')

router.use('/users', user)
router.use('/', authenticator, home)

router.use('/', errorHandler)

module.exports = router