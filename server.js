const express = require("express")
const db = require("./db.js")
const person = require("./models/person.js")
const MenuItem = require("./models/menu.js")
require("dotenv").config()
const bodyparser = require("body-parser")
const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyparser.json())


app.get("/",
    (req,res)=>{
        res.send("Hello World")
    }

)
//comment

const personRoutes = require("./routes/personRoutes.js")
const menuItemRoutes = require("./routes/menuRoutes.js")


app.use("/person",personRoutes)
app.use("/menu",menuItemRoutes)


app.listen(PORT,()=>{
    console.log("Server is Running at port 3000")
})