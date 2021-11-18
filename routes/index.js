const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const login = require('./modules/login')
const iogout = require('./modules/logout')
const dashboard = require('./modules/dashboard')

router.use('/dashboard', dashboard)
router.use('/logout', logout)
router.use('/login', login)
router.use('/', home)

module.exports = router