const express = require('express')
const router = express.Router()
const sessionCheck = require('../../sessionCheck')

router.get('/', sessionCheck, (req, res) => {
    return res.render('login')
})

module.exports = router