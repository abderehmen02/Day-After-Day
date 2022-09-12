import mongoose from 'mongoose'  ; 

const eventSchema = new  mongoose.Schema({
    date : {type : String , require : [true , "date is not provided" ]} ,
    title : String , 
    descreption : String ,
    user : mongoose.Types.ObjectId 
})
module.exports = mongoose.model('event' , eventSchema) ;