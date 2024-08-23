const express = require('express')
const BlogController = require('../controller/blog.controller')
const router = express.Router()

router.get('/', BlogController.getAllBlogs)

module.exports = router