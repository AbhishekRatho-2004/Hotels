const mongoose = require("mongoose")

const mongoURL = "mongodb://localhost:27017/hotels"
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