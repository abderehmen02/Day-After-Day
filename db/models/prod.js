const mongoose = require("mongoose")

const prodSchema = new mongoose.Schema({
    user : {type: mongoose.Types.ObjectId , ref: 'user'}  , 
    value : {type : Number  , min : [0  , "hours can not be under 0" ]  , max: [24 , "hours can not be more than 24"]} ,
    day : {type : String} ,

})
module.exports = mongoose.model("prod"  , prodSchema)