const mongoose = require("mongoose")
const {MONGO_DB_CONNECT }  = require("../config/default")

const connect =(url = MONGO_DB_CONNECT)=>{ mongoose.connect(url , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) }
  module.exports ={connect}