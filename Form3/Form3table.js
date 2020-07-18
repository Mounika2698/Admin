const mongoose = require("mongoose");

const Form3table =new mongoose.Schema({
    Driving_license: {
        type: String,
        required:true,
        trim:true
    },
   
    Issue_date: {
        type: String,
        required:true,
      
    },

    Vehicle_type: {
        type: String,
        required:true,
       
    },
    Expiry_date: {
        type: String,
        required:true,
       
    },
    Name1: {
        type: String,
        required:true,
        trim:true
    },
   
    Age1: {
        type: Number,
        required:true,
    },

    Relation1: {
        type: String,
        required:true,
       
    },
    Citizenship1: {
        type: String,
        required:true,
       
    },
    Name2: {
        type: String,
        required:true,
        trim:true
    },
   
    Age2: {
        type: Number,
        required:true,
    },

    Relation2: {
        type: String,
        required:true,
       
    },
    Citizenship2: {
        type: String,
        required:true,
       
    },
    Name3: {
        type: String,
        required:true,
        trim:true
    },
   
    Age3: {
        type: Number,
        required:true,
    },

    Relation3: {
        type: String,
        required:true,
       
    },
    Citizenship3: {
        type: String,
        required:true,
       
    },
    Name4: {
        type: String,
        required:true,
        trim:true
    },
   
    Age4: {
        type: Number,
        required:true,
    },

    Relation4: {
        type: String,
        required:true,
       
    },
    Citizenship4: {
        type: String,
        required:true,
       
    },
    createdTime:{
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("Form3", Form3table)