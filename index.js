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
app.use('/user', userRoutes)