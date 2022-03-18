const express = require('express')
const router = express.Router()
const { authenticator } = require('../middleware/auth')

const home = require('./modules/home')
const user = require('./modules/user')

const { errorHandler } = require('../middleware/errorHandler')

router.use('/users', user)
router.use('/home', authenticator, home)

router.get('/', (req, res) => res.redirect('/home'))
router.use('/', errorHandler)

module.exports = router