const mongoose = require("mongoose")   ; 
const userSchema = new mongoose.Schema({
   email : { type : String , required : [true , "email is required"]}   ,
  name :  { type : String , required : [true , "name is required"] } , 
  image : { type: String , default : 'unknownPerson.png'  }  , 
  password : { type :String , required : [true ,"password is required"]} , 
  birthDate  : {type : Date , required : [true , "birthdate is required"]}
})

module.exports = mongoose.model("user"  , userSchema )