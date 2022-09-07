import  Mongoose  from "mongoose";



const journalingSchema = new Mongoose.Schema({
title : {type : String , default : "no title"} ,
date : {type : String , default : new Date().toISOString()} ,
content : {type : String , default :  "no content"}        ,
user : {type : mongoose.Types.ObjectId , ref : "user" , required : [true , "the goal user is missing"]}
})


module.exports  = Mongoose.model("journaling"  , journalingSchema)