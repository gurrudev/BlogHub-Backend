const express = require('express')
const cors = require('cors')
const blogsRouter = require('./router/blogs.routes')
const dbConnect = require('./config/dbConfig')
const userRouter = require('./router/users.routes')

const app = express()

// Configure CORS to allow requests from specific origins
const allowedOrigins = ['http://localhost:3000', 'https://bloghubsite.netlify.app'];
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use(express.json())
dbConnect()

app.use('/api/blogs', blogsRouter)
app.use('/api/users', userRouter)

app.get('/', (req, res) => {
    res.status(200).send('App is live!🚀')
})

app.all('*', (req, res) => {
    res.status(404).json({ message: "Page not found!" })
})

module.exports = app