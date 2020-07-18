const express = require("express");
const router = express.Router();
const Form1Router = require("./Form1table")


//Create 
router.post("/",async(req,res) =>{
    var data = new Form1Router({
        First_name:req.body.First_name,
        Middle_name:req.body.Middle_name,
        Gender:req.body.Gender,
        Nationality:req.body.Nationality,
        Marital_status:req.body.Marital_status,
        Religion:req.body.Religion,
        Last_name:req.body.Last_name,
        Dob:req.body.Dob,
        Blood_group:req.body.Blood_group,
        Home_language:req.body.Home_language,
        Mother_name:req.body.Mother_name,
        Place_of_Birth:req.body.Place_of_Birth,
        Grandfather_name:req.body.Grandfather_name,
        Country_of_birth:req.body.Country_of_birth,
        Other_language:req.body.Other_language,
        National_identifier:req.body.National_identifier
      
    })

    await data.save(); 
    res.json(data);
})

//getAll
router.get("/", async(req,res) => {
    var findData = await Form1Router.find();
    res.json(findData);
})

//Update
router.put("/update",async(req,res) => {
    var update = await Form1Router.update({_id:req.body._id}, {$set:{
        First_name:req.body.First_name,
        Middle_name:req.body.Middle_name,
        Gender:req.body.Gender,
        Nationality:req.body.Nationality,
        Marital_status:req.body.Marital_status,
        Religion:req.body.Religion,
        Last_name:req.body.Last_name,
        Dob:req.body.Dob,
        Blood_group:req.body.Blood_group,
        Home_language:req.body.Home_language,
        Mother_name:req.body.Mother_name,
        Place_of_Birth:req.body.Place_of_Birth,
        Grandfather_name:req.body.Grandfather_name,
        Country_of_birth:req.body.Country_of_birth,
        Other_language:req.body.Other_language,
        National_identifier:req.body.National_identifier
    }});
    res.json(update);

})

//Delete
router.delete("/del/:id", async(req,res) => {
    var delData = await Form1Router.findByIdAndRemove(req.params.id).then(e => {
        res.json({message: "Deleted successfully"})
    })
})


router.get("/", (req,res) => {
    res.json("I am from router")
})

module.exports = router;