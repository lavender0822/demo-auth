const express = require('express')
const exphbs = require('express-handlebars')
const cookieParser = require('cookie-parser')
const session = requre('express-session')

const routes = require('./routes')
require('./config/mongoose')

const app = express()
const PORT = process.env.PORT || 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(cookieParser())

app.use(session({
    key: 'user_sid',
    secret: 'thisIsMySecretKey',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 6000000
    }
}))

app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid')
    }
    next()
})

app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`)
})