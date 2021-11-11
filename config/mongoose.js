const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/demo-auth')

const db =mongoose.connection

db.on('error', () => console.error('mongodb error!'))
db.once('open', () => console.log('mongodb connected!'))

module.exports = db