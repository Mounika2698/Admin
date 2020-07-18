const mongoose = require("mongoose");

const Form4table =new mongoose.Schema({
    Address_line1: {
        type: String,
        required:true,
        trim:true
    },
   
    Region_state: {
        type: String,
        required:true,
      
    },

    Address_Line2: {
        type: String,
        required:true,
       
    },
    Postal_Code: {
        type: String,
        required:true,
       
    },
    Country: {
        type: String,
        required:true,
        trim:true
    },
   
    Town_City: {
        type: String,
        required:true,
    },

    Telephone: {
        type: Number,
        required:true,
    },

    Uae_Address_line1: {
        type: String,
        required:true,
        trim:true
    },
   
    Uae_Region_state: {
        type: String,
        required:true,
      
    },

    Uae_Address_Line2: {
        type: String,
        required:true,
       
    },
    Uae_Postal_Code: {
        type: String,
        required:true,
       
    },
    Uae_Country: {
        type: String,
        required:true,
        trim:true
    },
   
    Uae_Town_City: {
        type: String,
        required:true,
    },
    Uae_Telephone: {
        type: Number,
        required:true,
    },
    
    createdTime:{
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("Form4", Form4table)