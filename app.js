const express = require('express')
const cors = require('cors')
const router = require('./router/routes')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/blogs', router)

app.get('/', (req, res)=>{
    res.status(200).json('ok')
})

app.all('*', (req, res) =>{
    res.status(404).json({message : "Page not found!"})
})

module.exports = app