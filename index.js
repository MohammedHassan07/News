const express = require('express')
const connnectDatabase = require('./config/dataBaseConnection')
const dotenv = require('dotenv')
dotenv.config()

const app = express()

app.use(express.json())
app.use(express.static('public'))

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is up at ${PORT}`)
    connnectDatabase()
})

const userRoutes = require('./routes/user.routes')
const homeRoutes = require('./routes/home.routes')
const adminRoutes = require('./routes/admin.routes')
const newsRoutes = require('./routes/news.routes')

app.use('/user', userRoutes)
app.use('/home', homeRoutes)
app.use('/admin', adminRoutes)
app.use('/news', newsRoutes)

