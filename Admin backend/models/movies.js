const mongoose =require("mongoose");
const validator = require("validator");

const movieschema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    year:{
        type:Number,
        required:true,
       
    },
    code:{
        type:Number,
        unique:true,
        required:true
        
    },
    link:{
       type:String,
       required: true
    },
    category:{
        type:String,
        required:true
    }
})

/*
const regSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
       
    },
    email:{
        type:String,
        required:true,
        unique:true
         
    },
    password:{
        type:String,
        required:true
    },
    c_password:{
        type:String,
        required:true
    },
})

*/

// it will create new collection using this collection. 

const Movie = new mongoose.model('Movie', movieschema);
module.exports = Movie; 



