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
const dailingRouter = require("./routers/dailing")




// setting the middlewares
app.use(cors({
    origin: '*'
}));
app.use(express.json())
app.get("/"  , (req , res)=>{
    res.send("hello")
} )

//setting the routers 
app.use("/api/auth"       , authRouter )
app.use("/api/idea"       , ideaRouter)
app.use('/api/prod'       , prodRouter )
app.use("/api/goal"       , goalRouter )
app.use("/api/dayling"    , dailingRouter  )


// setting the listening function 
const listenServer  = async ()=>{
// connecting to mongodb before starting the server
try{ 
    await connect("mongodb+srv://abderehmen02:abdo2015abdo2015@cluster0.xi3z5.mongodb.net/?retryWrites=true&w=majority")
// listening to the server after connecting to mongo db
    app.listen(PORT ,()=>{
console.log(`app listening on port ${PORT}`)
    }) }
catch(err){
    console.log("err")
    console.log(err)
} 
 }

listenServer()

