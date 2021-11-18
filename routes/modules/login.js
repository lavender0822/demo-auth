const express = require('express')
const router = express.Router()
const User = require('../../models/user')
const sessionCheck = require('../../sessionCheck')

router.get('/', sessionCheck, (req, res) => {
   return res.render('login')
})

router.post('/', (req, res) => {
    const { email, password } = req.body


    return User.findOne({ email, password }, 'first_name')
    .then(user => {
        if (user) {
            // if matched, redirect to user dashboard
            const { first_name } = user
            req.body['firstName'] = first_name
            req.session.user = req.body
            res.redirect(`/dashboard?user=${first_name}`)
    
          } else {
            // using comparing operator to save the result to emailCheck
            const emailCheck = rememberEmail === 'on'
            // if not matched, re-render login page with error message
            return res.render('login', { 
              error: `Either Email or Password not correct`, 
              emailCheck, email 
            })
          }
    })
    .catch(error => console.log(error))
})

module.exports = router