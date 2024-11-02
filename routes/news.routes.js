const express = require('express')
const { getAllNews, getByCategory, getById } = require('../controller/news.contoller')

const route = express.Router()

route.get('/all', getAllNews)

route.get('/by-category/:category', getByCategory)

route.get('/by-id/:id', getById)

module.exports = route