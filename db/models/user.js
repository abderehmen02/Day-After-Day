const mongoose = require("mongoose")   ; 
const userSchema = new mongoose.Schema({ 
   email : { type : String }   ,
  image : { type: String , default : 'unknownPerson.png'  }  , 
  password : { type :String } , 
  birthDate  : {type : Date  , default  : new Date()} ,
  fullName: {type : String}  , 
  verified : {type : Boolean , default : false}
})

module.exports = mongoose.model("user"  , userSchema )