const mongoose = require("mongoose");

const Form7table =new mongoose.Schema({
    Current_basic: {
        type: String,
        required:true,
        trim:true
    },
   
    Current_Transportation: {
        type: String,
        required:true,
      
    },

    Current_Total_package: {
        type: String,
        required:true,
       
    },
    Current_Housing: {
        type: String,
        required:true,
       
    },
    Current_Other_allowances: {
        type: String,
        required:true,
        trim:true
    },
   
    Current_Expected_Date_of_Joining: {
        type: String,
        required:true,
    },

    Expected_basic: {
        type: String,
        required:true,
        trim:true
    },
   
    Expected_Transportation: {
        type: String,
        required:true,
      
    },

    Expected_Total_package: {
        type: String,
        required:true,
       
    },
    Expected_Housing: {
        type: String,
        required:true,
       
    },
    Expected_Other_allowances: {
        type: String,
        required:true,
        trim:true
    },
   
    Expected_Expected_Date_of_Joining: {
        type: String,
        required:true,
    },
    
    
    createdTime:{
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("Form7", Form7table)