const express = require('express')
const cors = require('cors')
const blogsRouter = require('./router/blogs.routes')
const dbConnect = require('./config/dbConfig')
const userRouter = require('./router/users.routes')

const app = express()

const corsOptions = {
  origin: ['https://bloghubsite.netlify.app', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

app.use(express.json())
dbConnect()

app.use('/api/blogs', blogsRouter)
app.use('/api/users', userRouter)

app.options('/api/users/user-data', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.status(200).end(); // End the preflight request
});

app.get('/', (req, res) => {
    res.status(200).send('App is live!🚀')
})

app.all('*', (req, res) => {
    res.status(404).json({ message: "Page not found!" })
})

module.exports = app