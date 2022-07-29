const express = require("express") ; 
const app = express() 
const {PORT , URL } = require('./config/default.js')
const connect = require("./db/connect")

// setting the port
const PORT = process.env.PORT || 2000   ;
const listenServer  = async ()=>{
// connecting to mongodb before starting the server 
    await connect()
// listening to the server after connecting to mongo db
    app.listen(PORT ,()=>{
console.log(`app listening on port ${PORT}`)
    })
}
listenServer()