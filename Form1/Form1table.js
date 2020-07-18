const mongoose = require("mongoose");

const Form1table =new mongoose.Schema({
    First_name: {
        type: String,
        required:true,
        trim:true
    },
   
    Middle_name: {
        type: String,
        required:true,
        trim:true
    },

    Gender: {
        type: String,
        required:true,
    },

    Nationality: {
        type: String,
        required:true, 
    },

    Marital_status: {
        type: String,
        required:true,
        trim:true
    },
   
    Religion: {
        type: String,
        required:true,
    },

    Last_name: {
        type: String,
        required:true,
    },

    Dob: {
        type: String,
        required:true,
    },

    Blood_group: {
        type: String,
        required:true, 
    },

    Mother_name: {
        type: String,
        required:true,
    },

    Place_of_Birth : {
        type: String,
        required:true,
        trim:true
    },
   
    Home_language: {
        type: String,
        required:true,
    },

    Grandfather_name: {
        type: String,
        required:true,
    },

    Country_of_birth: {
        type: String,
        required:true, 
    },

    Other_language: {
        type: String,
        required:true,    
    },

    National_identifier : {
        type: String,
        required:true,
    },

    createdTime:{
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("Form1", Form1table)