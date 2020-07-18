const express = require("express");
const router = express.Router();
const Form3Router = require("./Form3table")

  
//Create 
router.post("/",async(req,res) =>{
    var data = new Form3Router({
        Driving_license:req.body.Driving_license,
        Issue_date:req.body.Issue_date,
        Vehicle_type:req.body.Vehicle_type,
        Expiry_date:req.body.Expiry_date,
        Name1:req.body.Name1,
        Age1:req.body.Age1,
        Relation1:req.body.Relation1,
        Citizenship1:req.body.Citizenship1,
        Name2:req.body.Name2,
        Age2:req.body.Age2,
        Relation2:req.body.Relation2,
        Citizenship2:req.body.Citizenship2,
        Name3:req.body.Name3,
        Age3:req.body.Age3,
        Relation3:req.body.Relation3,
        Citizenship3:req.body.Citizenship3,
        Name4:req.body.Name4,
        Age4:req.body.Age4,
        Relation4:req.body.Relation4,
        Citizenship4:req.body.Citizenship4
    
    });

    await data.save();
    res.json(data);
})

//getAll
router.get("/", async(req,res) => {
    var findData = await Form3Router.find();
    res.json(findData);
})

//Update
router.put("/update",async(req,res) => {
    var update = await Form3Router.update({_id:req.body._id}, {$set:{
        Driving_license:req.body.Driving_license,
        Issue_date:req.body.Issue_date,
        Vehicle_type:req.body.Vehicle_type,
        Expiry_date:req.body.Expiry_date,
        Name1:req.body.Name1,
        Age1:req.body.Age1,
        Relation1:req.body.Relation1,
        Citizenship1:req.body.Citizenship1,
        Name2:req.body.Name2,
        Age2:req.body.Age2,
        Relation2:req.body.Relation2,
        Citizenship2:req.body.Citizenship2,
        Name3:req.body.Name3,
        Age3:req.body.Age3,
        Relation3:req.body.Relation3,
        Citizenship3:req.body.Citizenship3,
        Name4:req.body.Name4,
        Age4:req.body.Age4,
        Relation4:req.body.Relation4,
        Citizenship4:req.body.Citizenship4
    }});
    res.json(update);

})

//Delete
router.delete("/del/:id", async(req,res) => {
    var delData = await Form3Router.findByIdAndRemove(req.params.id).then(e => {
        res.json({message: "Deleted successfully"})
    })
})


router.get("/", (req,res) => {
    res.json("I am from router3")
})

module.exports = router;