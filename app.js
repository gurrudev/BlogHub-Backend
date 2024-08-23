const express = require('express')
const cors = require('cors')
const blogsRouter = require('./router/blogs.routes')
const dbConnect = require('./config/dbConfig')

const app = express()
app.use(cors())
app.use(express.json())
dbConnect()

app.use('/api/blogs', blogsRouter)

app.get('/', (req, res)=>{
    res.status(200).json('ok')
})

app.all('*', (req, res) =>{
    res.status(404).json({message : "Page not found!"})
})

module.exports = app