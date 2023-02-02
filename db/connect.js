const mongoose = require("mongoose")
const {MONGO_DB_CONNECT }  = require("../config/default")
require("dotenv")
const connect = async (url = MONGO_DB_CONNECT)=>{
console.log("db connect") ; 
console.log(MONGO_DB_CONNECT)
    try{
    await mongoose.connect(url , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }  , (err)=>{
    if(err) { console.log("mongodb is not connected")  ;  
    console.log(err) ;
    throw new Error(err) 
  } 
    else console.log("mongodb connected")
  }
  ) } 
catch(err){
    console.log(err)
}
}
module.exports =connect