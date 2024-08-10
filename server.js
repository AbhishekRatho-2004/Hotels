const express = require("express")
const db = require("./db.js")
const person = require("./models/person.js")
const MenuItem = require("./models/menu.js")
const bodyparser = require("body-parser")
const app = express()

app.use(bodyparser.json())


app.get("/",
    (req,res)=>{
        res.send("Hello World")
    }

)


const personRoutes = require("./routes/personRoutes.js")
const menuItemRoutes = require("./routes/menuRoutes.js")


app.use("/person",personRoutes)
app.use("/menu",menuItemRoutes)


app.listen(3000,()=>{
    console.log("Server is Running at port 3000")
})