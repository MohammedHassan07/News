const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const hbs = require('hbs')
const path = require('path')
dotenv.config()

const app = express()

app.use(express.json())
app.use(express.static('public'))
app.use(cookieParser())
app.engine('hbs', hbs.__express)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
hbs.registerPartials('views/partials')

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is up at ${PORT}`)
})

const homeRoutes = require('./routes/home.routes')
const adminRoutes = require('./routes/admin.routes')
const newsRoutes = require('./routes/news.routes')

app.use(homeRoutes)
app.use('/admin', adminRoutes)
app.use('/news', newsRoutes)

