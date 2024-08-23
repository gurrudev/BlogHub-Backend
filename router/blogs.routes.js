const express = require('express')
const BlogController = require('../controller/blog.controller')
const blogsRouter = express.Router()

blogsRouter.get('/', BlogController.getAllBlogs)
blogsRouter.post('/add',BlogController.addBlogs)
blogsRouter.put('/update/:id', BlogController.updateBlogs)
blogsRouter.get('/:id', BlogController.getBlogById)
blogsRouter.delete('/:id', BlogController.deleteBlogById)
blogsRouter.get('/user/:id', BlogController.getByUserId)

module.exports = blogsRouter