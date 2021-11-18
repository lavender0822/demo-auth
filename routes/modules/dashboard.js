const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    if (req.session.user && req.cookies.user_sid){
        const user = req.query.user
        return res.render('dashboard', { user })
    }else res.redirect('/login')
})

nodule.exports = router