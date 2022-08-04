const mongoose = require("mongoose")   ;


const goalSchema = new mongoose.Schema({
    title : {type :String  , required:[true , " goal title is missing " ] , minlength : [2  , "title is too short"]  , maxlength: [30 , "title is too long"] }  , 
    descreption : { type : String  , default :''} , 
    deadLine : {type : Date , default : new Date()} , 
    completed :{type :Boolean , default : false} ,
    progress : {type : Number , min : 0 , max : 100 , default : 0} , 
    user : {type : mongoose.Types.ObjectId , ref : "user" , required : [true , "the goal user is missing"]}
})


module.exports = mongoose.model("goal"  , goalSchema)