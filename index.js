//third party modules 
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan =require('morgan');
const cors =require('cors');


//Middleware 
app.use(morgan("dev"));
app.use(express.json()); 
app.use(cors());



//listen port
app.listen(5000, () => {
    console.log("Server started on 5000");
})

//Router
const Form1 = require("./Form1/Form1");
const Form2 = require("./Form2/Form2");
const Form3 = require("./Form3/Form3");
const Form4 = require("./Form4/Form4");
const Form5 = require("./Form5/Form5");
const Form6 = require("./Form6/Form6");
const Form7 = require("./Form7/Form7");
const Form8 = require("./Form8/Form8");



app.use('/Form1', Form1);
app.use('/Form2', Form2);
app.use('/Form3', Form3);
app.use('/Form4', Form4);
app.use('/Form5', Form5);
app.use('/Form6', Form6);
app.use('/Form7', Form7);
app.use('/Form8', Form8);

//DB connections 
mongoose.connect('mongodb://localhost/panel',{useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
if(!err)
{
    console.log("DB is Connected")
}

})
