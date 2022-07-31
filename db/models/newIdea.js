const mongoose = require("mongoose")   ; 
const ideaSchema = new mongoose.Schema({
user: {type : String , required: [true , 'the user of the idea is missing']}    , 
text : {type : String , required : [true , "you didn't provide any text of the idea"]} ,
date :{type : Date , default  : new Date()}
})

module.exports = mongoose.model("user"  , ideaSchema )