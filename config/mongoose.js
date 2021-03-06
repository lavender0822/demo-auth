const mongoose = require('mongoose')
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost/demo-auth'

mongoose.connect(MONGODB_URL)

const db =mongoose.connection

db.on('error', () => console.error('mongodb error!'))
db.once('open', () => console.log('mongodb connected!'))

module.exports = db