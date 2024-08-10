const express = require("express")
const router = express.Router()
const person = require("../models/person.js")
router.post("/", async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new person(data); // Ensure 'Person' is the correct model
        const response = await newPerson.save(); // Await the save operation
        console.log("Data Saved successfully");
        res.status(200).json(response);
    } catch (error) {
        console.log("Error saving:", error);
        res.status(400).json({ error: 'Internal server error' });
    }
});


router.get("/",async (req,res)=>{
    try {
        const data =await person.find()
        console.log("Data Fetched")
        res.status(200).json(data);
    } catch (error) {
        console.log("Error Loading Data")
        res.status(400).json({ error: 'Internal server error' });
    }
})

router.get("/:workType",async(req,res)=>{
    try {
        const workType = req.params.workType
        if(workType=="Chef" || workType=="Manager" || workType=="Waiter"){
            const data = await person.find({work:workType})
            console.log("Data Fetched")
            res.status(200).json(data);
        }else{
            res.status(400).json({error:"Invalid work type"})
        }
    } catch (error) {
        
    }
})

router.put("/:id", async(req,res)=>{
    try {
        const id = req.params.id
        const updatedPersonData = req.body
        const response = await person.findByIdAndUpdate(id,updatedPersonData,{
            new:true,
            runValidators:true
        })
        if(!response){
            res.status(404).json({error:"Person not found"})
        }
        console.log("Data Updates")
        res.status(200).json(response);
    } catch (error) {
        console.log(error)
        res.status(400).send({message:"unable to update"})
    }
})
router.delete("/:id", async (req,res)=>{
    try {
        const personData = req.params.id
        const response = await person.findByIdAndDelete(personData)
        if(!response){
            res.status(404).json({error:"Person not found"})
        }
        console.log("Deleted")
        res.status(200).json({message:"message deleted successfully"});
    } catch (error) {
        
    }
})
module.exports = router