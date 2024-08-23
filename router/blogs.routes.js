const express = require('express')
const BlogController = require('../controller/blog.controller')
const blogsRouter = express.Router()

blogsRouter.get('/', BlogController.getAllBlogs)

module.exports = blogsRouter