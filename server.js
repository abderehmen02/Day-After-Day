const express = require("express") 
const app     = express()
const {PORT  }= require('./config/default.js')
const connect = require("./db/connect")
const cors    = require("cors")
const authRouter = require("./routers/auth")


// setting the middlewares
app.use(cors())
app.use(express.json())

//setting the routers 
app.use("/api/auth"  , authRouter )


// setting the listening function 

const listenServer  = async ()=>{
// connecting to mongodb before starting the server 
    await connect()
// listening to the server after connecting to mongo db
    app.listen(PORT ,()=>{
console.log(`app listening on port ${PORT}`)
    }) 
 }

listenServer()

module.exports = app     ;