const express = require('express')
const router = express.Router()
const User = require('../../models/user')

router.get('/', (req, res) => {
    res.render('login')
})

router.post('/', (req, res) => {
    const { email, password } = req.body
    const userInput = email + password
    const errorMessage = { error: `Either Email or Password not correct`}

    return User.findOne({ email }, 'first_name email password')
    .then(user => {
        if (user === null) {
            res.render('login', errorMessage)
        }

        const { first_name, email, password } = user
        const dbStored = email + password
        userInput === dbStored ? 
        res.render('index', {firstName: first_name }) :
        res.render('login', errorMessage) 
    })    
    .catch(error => console.log(error))
})

module.exports = router