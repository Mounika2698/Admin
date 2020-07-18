const express = require("express");
const router = express.Router();
const Form4Router = require("./Form4table")

  
//Create 
router.post("/",async(req,res) =>{
    var data = new Form4Router({
        Address_line1:req.body.Address_line1,
        Region_state:req.body.Region_state,
        Address_Line2:req.body.Address_Line2,
        Postal_Code:req.body.Postal_Code,
        Country:req.body.Country,
        Town_City:req.body.Town_City,
        Telephone:req.body.Telephone,
        Uae_Address_line1:req.body.Uae_Address_line1,
        Uae_Region_state:req.body.Uae_Region_state,
        Uae_Address_Line2:req.body.Uae_Address_Line2,
        Uae_Postal_Code:req.body.Uae_Postal_Code,
        Uae_Country:req.body.Uae_Country,
        Uae_Telephone:req.body.Uae_Telephone,
        Uae_Town_City:req.body.Uae_Town_City
    });

    await data.save();
    res.json(data);
})

//getAll
router.get("/", async(req,res) => {
    var findData = await Form4Router.find();
    res.json(findData);
})

//Update
router.put("/update",async(req,res) => {
    var update = await Form4Router.update({_id:req.body._id}, {$set:{
        Address_line1:req.body.Address_line1,
        Region_state:req.body.Region_state,
        Address_Line2:req.body.Address_Line2,
        Postal_Code:req.body.Postal_Code,
        Country:req.body.Country,
        Town_City:req.body.Town_City,
        Telephone:req.body.Telephone,
        Uae_Address_line1:req.body.Uae_Address_line1,
        Uae_Region_state:req.body.Uae_Region_state,
        Uae_Address_Line2:req.body.Uae_Address_Line2,
        Uae_Postal_Code:req.body.Uae_Postal_Code,
        Uae_Country:req.body.Uae_Country,
        Uae_Telephone:req.body.Uae_Telephone,
        Uae_Town_City:req.body.Uae_Town_City
    }});
    res.json(update);

})

//Delete
router.delete("/del/:id", async(req,res) => {
    var delData = await Form4Router.findByIdAndRemove(req.params.id).then(e => {
        res.json({message: "Deleted successfully"})
    })
})


router.get("/", (req,res) => {
    res.json("I am from router")
})

module.exports = router;