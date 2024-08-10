const mongoose = require("mongoose")
require("dotenv").config()
const mongoURL =process.env.DB_URL
mongoose.connect(mongoURL, {
     useNewUrlParser: true,
      useUnifiedTopology: true 
})

const db = mongoose.connection;

db.on("connected",()=>{
    console.log("connected to mongoDB")
})

db.on("error",()=>{
    console.log("connection error")
})

db.on("disconnected",()=>{
    console.log("disconnected to mongoDB")
})

module.exports=db;