const express = require('experss')
const { home, contact } = require('../controller/home.controller')

const route = express.Router()

route.get('/home', home)

route.get('/contact', contact)

module.exports = route