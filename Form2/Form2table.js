const mongoose = require("mongoose");

const Form2table =new mongoose.Schema({
    Issuing_country: {
        type: String,
        required:true,
        trim:true
    },
   
    Issued_by: {
        type: String,
        required:true,
        trim:true
    },

    passport_expiry_date: {
        type: String,
        required:true,
       
    },
    Passport_number: {
        type: Number,
        required:true,
       
    },
    Passport_issue_date: {
        type: String,
        required:true,
        trim:true
    },
   
    Visa_type: {
        type: String,
        required:true,
    },

    Visa_number: {
        type: Number,
        required:true,
       
    },
    Visa_expiry_date: {
        type: String,
        required:true,
       
    },
    Current_sponsor: {
        type: String,
        required:true,
       
    },
    Visa_issue_date: {
        type: String,
        required:true,
       
    },
 
    createdTime:{
        type: Date,
        default: Date.now
    }
 
})

module.exports = mongoose.model("Form2", Form2table)