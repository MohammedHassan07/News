const express = require('experss')
const { getAllNews, getByCategory } = require('../controller/news.contoller')

const route = express.Router()

route.get('/all', getAllNews)

route.get('/by-category/:category', getByCategory)

module.exports = route