const express = require('express')
const cors = require('cors')
const blogsRouter = require('./router/blogs.routes')
const dbConnect = require('./config/dbConfig')
const userRouter = require('./router/users.routes')
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./utils/swaggerDocument')
const path = require('path')

const app = express()

app.use(cors());
app.use(express.json())

// db config
dbConnect()

app.use('/static', express.static(path.join(__dirname, 'public')));

// swagger route
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument, {
    customCssUrl: '/swagger-ui/swagger-ui.css',
    customJs: [
      '/swagger-ui/swagger-ui-bundle.js',
      '/swagger-ui/swagger-ui-standalone-preset.js'
    ]
  }));
  
  

// api routes
app.use('/api/blogs', blogsRouter)
app.use('/api/users', userRouter)

app.get('/', (req, res) => {
    res.status(200).send('App is live!🚀')
})

app.all('*', (req, res) => {
    res.status(404).json({ message: "Page not found!" })
})

module.exports = app