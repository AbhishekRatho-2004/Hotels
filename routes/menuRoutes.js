const express = require("express")
const router = express.Router()
const MenuItem = require("../models/menu.js")

router.post("/", async (req,res)=>{
    try {
        const data = req.body
        const newMenuItem = new MenuItem(data);
        const response = await newMenuItem.save();
        console.log("Data Saved successfully");
        res.status(200).json(response);
    } catch (error) {
        console.log(error)
        res.status(400).send({error:"Error"})
    }
})

router.get("/", async(req,res)=>{
    try {
        const data = await MenuItem.find({})
        console.log("Data Fectched succesfully")
        res.status(200).json(data)
    } catch (error) {
        console.log("An error occured while fetching the data")
    }
})

router.get("/:taste",async (req,res)=>{
    try {
        const taste = req.params.taste
        if(taste=="sour"||taste=="spicy"||taste=="sweet"){
            const data = await MenuItem.find({taste:taste})
            console.log("Data Fectched succesfully")
            res.status(200).json(data)
        }
        else{
            res.json(400).send({message:"No Data Found"})
        }
    } catch (error) {
        res.status(400).send({error:"Error Occured"})
    }
})
module.exports = router