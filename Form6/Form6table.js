const mongoose = require("mongoose");

const Form6table =new mongoose.Schema({
    Company_name: {
        type: String,
        required:true,
        trim:true
    },
   
    Industry: {
        type: String,
        required:true,
      
    },

    Designation: {
        type: String,
        required:true,
       
    },
    Reason_of_leaving: {
        type: String,
        required:true,
       
    },
    Start_date: {
        type: Number,
        required:true,
        trim:true
    },
   
    End_date: {
        type: String,
        required:true,
    },
    Company_name2: {
        type: String,
        required:true,
        trim:true
    },
   
    Industry2: {
        type: String,
        required:true,
      
    },

    Designation2: {
        type: String,
        required:true,
       
    },
    Reason_of_leaving2: {
        type: String,
        required:true,
       
    },
    Start_date2: {
        type: Number,
        required:true,
        trim:true
    },
   
    End_date2: {
        type: Number,
        required:true,
    },
    createdTime:{
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("Form6", Form6table)