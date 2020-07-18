const express = require("express");
const router = express.Router();
const Form7Router = require("./Form7table")

  
//Create 
router.post("/",async(req,res) =>{
    var data = new Form7Router({
        Current_basic:req.body.Current_basic,
        Current_Transportation:req.body.Current_Transportation,
        Current_Total_package:req.body.Current_Total_package,
        Current_Housing:req.body.Current_Housing,
        Current_Other_allowances:req.body.Current_Other_allowances,
        Current_Expected_Date_of_Joining:req.body.Current_Expected_Date_of_Joining,
        Expected_basic:req.body.Expected_basic,
        Expected_Transportation:req.body.Expected_Transportation,
        Expected_Total_package:req.body.Expected_Total_package,
        Expected_Housing:req.body.Expected_Housing,
        Expected_Other_allowances:req.body.Expected_Other_allowances,
        Expected_Expected_Date_of_Joining:req.body.Expected_Expected_Date_of_Joining,
      
    });

    await data.save();
    res.json(data);
})

//getAll
router.get("/", async(req,res) => {
    var findData = await Form7Router.find();
    res.json(findData);
})

//Update
router.put("/update",async(req,res) => {
    var update = await Form7Router.update({_id:req.body._id}, {$set:{
        Current_basic:req.body.Current_basic,
        Current_Transportation:req.body.Current_Transportation,
        Current_Total_package:req.body.Current_Total_package,
        Current_Housing:req.body.Current_Housing,
        Current_Other_allowances:req.body.Current_Other_allowances,
        Current_Expected_Date_of_Joining:req.body.Current_Expected_Date_of_Joining,
        Expected_basic:req.body.Expected_basic,
        Expected_Transportation:req.body.Expected_Transportation,
        Expected_Total_package:req.body.Expected_Total_package,
        Expected_Housing:req.body.Expected_Housing,
        Expected_Other_allowances:req.body.Expected_Other_allowances,
        Expected_Expected_Date_of_Joining:req.body.Expected_Expected_Date_of_Joining,
    }});
    res.json(update);

})

//Delete
router.delete("/del/:id", async(req,res) => {
    var delData = await Form7Router.findByIdAndRemove(req.params.id).then(e => {
        res.json({message: "Deleted successfully"})
    })
})


router.get("/", (req,res) => {
    res.json("I am from router")
})

module.exports = router;