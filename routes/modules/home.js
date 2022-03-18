const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const userId = req.user.id
  res.render('index', {userId: userId})
})

module.exports = router