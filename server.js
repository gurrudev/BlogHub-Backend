const app = require('./app')


const PORT = 3002

app.listen(PORT, (req, res) =>{
    console.log(`server is running ${PORT}`);
})