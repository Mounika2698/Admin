const express = require("express");
const router = express.Router();
const Form5Router = require("./Form5table")

  
//Create 
router.post("/",async(req,res) =>{
    var data = new Form5Router({
        Qualification1:req.body.Qualification1,
        Qualification2:req.body.Qualification2,
        Qualification3:req.body.Qualification3,
        School1:req.body.School1,
        School2:req.body.School2,
        School3:req.body.School3,
        Date1:req.body.Date1,
        Date2:req.body.Date2,
        Date3:req.body.Date3,

    });

    await data.save();
    res.json(data);
})

//getAll
router.get("/", async(req,res) => {
    var findData = await Form5Router.find();
    res.json(findData);
})

//Update
router.put("/update",async(req,res) => {
    var update = await Form5Router.update({_id:req.body._id}, {$set:{
        Qualification1:req.body.Qualification1,
        Qualification2:req.body.Qualification2,
        Qualification3:req.body.Qualification3,
        School1:req.body.School1,
        School2:req.body.School2,
        School3:req.body.School3,
        Date1:req.body.Date1,
        Date2:req.body.Date2,
        Date3:req.body.Date3,
    }});
    res.json(update);

})

//Delete
router.delete("/del/:id", async(req,res) => {
    var delData = await Form5Router.findByIdAndRemove(req.params.id).then(e => {
        res.json({message: "Deleted successfully"})
    })
})


router.get("/", (req,res) => {
    res.json("I am from router")
})

module.exports = router;