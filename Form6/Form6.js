const express = require("express");
const router = express.Router();
const Form6Router = require("./Form6table")

  
//Create 
router.post("/",async(req,res) =>{
    var data = new Form6Router({
        Company_name:req.body.Company_name,
        Industry:req.body.Industry,
        Designation:req.body.Designation,
        Reason_of_leaving:req.body.Reason_of_leaving,
        Start_date:req.body.Start_date,
        End_date:req.body.End_date,
        Company_name2:req.body.Company_name2,
        Industry2:req.body.Industry2,
        Designation2:req.body.Designation2,
        Reason_of_leaving2:req.body.Reason_of_leaving2,
        Start_date2:req.body.Start_date2,
        End_date2:req.body.End_date2,
      
    });

    await data.save();
    res.json(data);
})

//getAll
router.get("/", async(req,res) => {
    var findData = await Form6Router.find();
    res.json(findData);
})

//Update
router.put("/update",async(req,res) => {
    var update = await Form6Router.update({_id:req.body._id}, {$set:{
        Company_name:req.body.Company_name,
        Industry:req.body.Industry,
        Designation:req.body.Designation,
        Reason_of_leaving:req.body.Reason_of_leaving,
        Start_date:req.body.Start_date,
        End_date:req.body.End_date,
        Company_name2:req.body.Company_name2,
        Industry2:req.body.Industry2,
        Reason_of_leaving2:req.body.Reason_of_leaving2,
        Designation2:req.body.Designation2,
        Start_date2:req.body.Start_date2,
        End_date2:req.body.End_date2,
    }});
    res.json(update);

})

//Delete
router.delete("/del/:id", async(req,res) => {
    var delData = await Form6Router.findByIdAndRemove(req.params.id).then(e => {
        res.json({message: "Deleted successfully"})
    })
})


router.get("/", (req,res) => {
    res.json("I am from router")
})

module.exports = router;