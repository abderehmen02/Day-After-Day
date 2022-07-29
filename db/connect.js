const mongoose = require("mongoose")
const {MONGO_DB_CONNECT }  = require("../config/default")

const connect = async (url = MONGO_DB_CONNECT)=>{
    await mongoose.connect(url , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) }
  module.exports =connect