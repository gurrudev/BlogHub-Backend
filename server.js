const app = require('./app')


const PORT = 3002

app.listen(PORT, (req, res) =>{
    console.log(`server is running http://127.0.0.1:${PORT}`);
})