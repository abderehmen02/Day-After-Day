const mongoose = require("mongoose")   ; 
const userSchema = new mongoose.Schema({
  email : { type : String , required : [true , "email is required"]}   ,
  name :{type : String , required : [true , "name is required"]  , unique : Boolean } , 
  image : {type: String , default : 'unknownPerson.png'  } ,
  birthDate : {type : Date , required: [true , 'birth date is required '] } , 
})
module.exports = mongoose.model("user"  , userSchema )