const db = require('../../config/mongoose')
const User = require('../user')
const dummyData = require('../../sample_users.json')

db.once('open', () => {
    dummyData.forEach(({ firstName, email, password }) => {
        User.create({ first_name: firstName, email, password})
        .catch(error => console.log('error'))
    })
    console.log('userSeeder done!')
})