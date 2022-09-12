const mongoose = require("mongoose")   ;


const eventSchema = new mongoose.Schema({
    title : String , 
    descreption : String , 
    date : {type : String ,required : [true , 'please provide a date']} , 
    user : mongoose.Types.ObjectId
})


module.exports = mongoose.model("event"  , eventSchema)