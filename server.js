const express = require("express") 
const app     = express()
const {PORT  }= require('./config/default.js')
const morgan = require("morgan")
const connect = require("./db/connect")
const cors    = require("cors")
const authRouter = require("./routers/auth")
const ideaRouter = require("./routers/idea")
const prodRouter   = require("./routers/prod")
const goalRouter = require("./routers/goal")


// setting the middlewares
app.use(cors())
app.use(express.json())
app.use(morgan())


//setting the routers 
app.use("/api/auth"  , authRouter )
app.use("/api/idea"  , ideaRouter)
app.use('/api/prod'  , prodRouter )
app.use("/api/goal"  , goalRouter )



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