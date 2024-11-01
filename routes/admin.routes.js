const express = require('express')
const verifyJWT = require('../middlewares/verfiyJWT')
const checkEmpty = require('../middlewares/checkEmpty')
const checkUnique = require('../middlewares/checkUnique')
const { addPost, register, login } = require('../controller/admin.controller')

const route = express.Router()


route.post('/register', checkEmpty, checkUnique, register)

route.post('/login', checkEmpty, login)

route.post('/add-post', checkEmpty, verifyJWT, addPost)


module.exports = route