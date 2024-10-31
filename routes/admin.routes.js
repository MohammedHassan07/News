const express = require('experss')
const verifyJWT = require('../middlewares/verfiyJWT')
const checkEmpty = require('../middlewares/checkEmpty')
const { addPost } = require('../controller/admin.controller')

const route = express.Router()

route.post('/add-post', checkEmpty, verifyJWT, addPost)


module.exports = route