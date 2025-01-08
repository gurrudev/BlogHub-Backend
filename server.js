const app = require("./app");

const PORT = 3002;
app.listen(PORT, (req, res) => {
    console.log(`Server is running http://127.0.0.1:${PORT}`);
});

/////////////////////////////////
///////     Clusters     ////////
/////////////////////////////////

/*
const cluster = require('cluster')
const os = require('os')

const numCPUs = os.cpus().length

if (cluster.isMaster) { 
    console.log(`Master ${process.pid} is running`)
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`)
    })
} else {
    console.log(`Worker ${process.pid} started`)
    const PORT = 3002
    app.listen(PORT, (req, res) =>{
        console.log(`Server is running http://127.0.0.1:${PORT}`);
    })
}
*/
