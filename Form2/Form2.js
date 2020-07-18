const express = require("express");
const router = express.Router();
const Form2Router = require("./Form2table")

//Create 
router.post("/",async(req,res) =>{
    var data = new Form2Router({
        Issuing_country:req.body.Issuing_country,
        Issued_by:req.body.Issued_by,
        passport_expiry_date:req.body.passport_expiry_date,
        Passport_number:req.body.Passport_number,
        Passport_issue_date:req.body.Passport_issue_date,
        Visa_type:req.body.Visa_type,
        Visa_number:req.body.Visa_number,
        Visa_expiry_date:req.body.Visa_expiry_date,
        Current_sponsor:req.body.Current_sponsor,
        Visa_issue_date:req.body.Visa_issue_date
    });

    await data.save();
    res.json(data);
})

//getAll
router.get("/", async(req,res) => {
    var findData = await Form2Router.find();
    res.json(findData);
})

//Update
router.put("/update",async(req,res) => {
    var update = await Form2Router.update({_id:req.body._id}, {$set:{
        Issuing_country:req.body.Issuing_country,
        Issued_by:req.body.Issued_by,
        passport_expiry_date:req.body.passport_expiry_date,
        Passport_number:req.body.Passport_number,
        Passport_issue_date:req.body.Passport_issue_date,
        Visa_type:req.body.Visa_type,
        Visa_number:req.body.Visa_number,
        Visa_expiry_date:req.body.Visa_expiry_date,
        Current_sponsor:req.body.Current_sponsor,
        Visa_issue_date:req.body.Visa_issue_date
    }});
    res.json(update);

})

//Delete
router.delete("/del/:id", async(req,res) => {
    var delData = await Form2Router.findByIdAndRemove(req.params.id).then(e => {
        res.json({message: "Deleted successfully"})
    })
})

router.get("/", (req,res) => {
    res.json("I am from router")
})

module.exports = router;