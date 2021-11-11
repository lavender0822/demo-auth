const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const login = require('./modules/login')

router.get('/login', login)
router.get('/', home)

module.exports = router