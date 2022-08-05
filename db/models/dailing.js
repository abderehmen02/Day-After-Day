const mongoose = require("mongoose") ; 

const dailingSchema = new mongoose.Schema({
  date : {type : String }  , 
  descreption : {type: String , minlength : [4 , "descreption is too short"]} ,
  importantEvents: [String]  ,
  rate : {type : Number , min : 0 , max : 5} , 
  user : {type : mongoose.Types.ObjectId  , ref: "user" }
})
module.exports = mongoose.model("dailing"  , dailingSchema )