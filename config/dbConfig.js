const mongoose  = require("mongoose"); 
const dotenv = require('dotenv');
dotenv.config();

const dbConnect = () =>{
    try {
        mongoose.connect(`mongodb+srv://${process.env.MONGO_CRED}.mongodb.net/BLOG-API`).then(()=>{
            console.log('DB Connected :)')
        }).catch((e)=>{
            console.log(e)
        })
    } catch (error) {
       console.log(error) 
    }
}

module.exports = dbConnect;