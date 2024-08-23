const express = require('express')
const UserController = require('../controller/user.controller');

const userRouter = express.Router();

userRouter.get('/', UserController.getAllUser)
userRouter.post('/signup',UserController.signUp)
userRouter.post('/login',UserController.logIn)
userRouter.put('/update/:id', UserController.updateUser)
userRouter.get('/user-data', UserController.getUserData)

module.exports = userRouter;