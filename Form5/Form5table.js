const mongoose = require("mongoose");

const Form5table =new mongoose.Schema({
    Qualification1: {
        type: String,
        required:true,
        trim:true
    },
   
    Qualification2: {
        type: String,
        required:true,
      
    },

    Qualification3: {
        type: String,
        required:true,
       
    },
    School1: {
        type: String,
        required:true,
       
    },
    School2: {
        type: String,
        required:true,
        trim:true
    },
   
    School3: {
        type: String,
        required:true,
    },

    Date1: {
        type: Number,
        required:true,
        trim:true
    },
   
    Date2: {
        type: Number,
        required:true,
      
    },

    Date3: {
        type: Number,
        required:true,
       
    },
   
    
    createdTime:{
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("Form5", Form5table)