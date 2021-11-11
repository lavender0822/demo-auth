const express = require('express')
const exphbs = require('express-handlebars')
require('./config/mongoose')

const app = express()
const PORT = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('login')
})

app.post('/login', (req, res) => {
    const { email, password } = req.body
    console.log(email, password)
})

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`)
})