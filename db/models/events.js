import mongoose from 'mongoose'  ; 

const eventMongoose = mongoose.model({
    date : {type : String , require : [true , "date is not provided" ]} ,
    title : String , 
    descreption : String ,
    user : mongoose. 
})