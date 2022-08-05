const mongoose = require("mongoose") ; 

const dailingSchema = new mongoose.Schema({
  day : {type :String , required :[true , "dat is missing"]} , 
  desc : {type: String , minlength : [4 , "descreption is too short"] , default : "" } ,
  importantEvents: {type : [String] , default : []} ,
  rate : {type : Number , min : 0 , max : 5 , default  :0} , 
  user : {type : mongoose.Types.ObjectId  , ref: "user" }
})
module.exports = mongoose.model("dailing"  , dailingSchema )