const express = require("express") 
const app     = express()
const {PORT , MONGO_DB_CONNECT , WEB_TOKEN_SECRET }= require('./config/default.js')
const connect = require("./db/connect")
const cors    = require("cors")
const path = require("path")
const authRouter = require("./routers/auth")
const ideaRouter = require("./routers/idea")
const prodRouter   = require("./routers/prod")
const goalRouter = require("./routers/goal")
const dailingRouter = require("./routers/dailing")
const journalingRouter = require("./routers/journaling")
const eventRouter = require('./routers/events')
const emailRouter = require("./routers/email")

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
app.use("/api/journaling"  , journalingRouter)
app.use('/api/event' , eventRouter)
app.use('/api/email' , emailRouter )



// serving the front end pages
app.use(express.static(path.join(__dirname, "build")));
app.get("*" , async(req , res)=>{
    res.sendFile(path.join(__dirname , 'build' , 'index.html'))
} )

// setting the listening function 
const listenServer  = async ()=>{
// connecting to mongodb before starting the server
try{ 
await connect()
// listening to the server after connecting to mongo db
    app.listen(PORT ,()=>{
console.log(`app listening on port ${PORT}`)
    }) 
}
catch(err){
    console.log("err")
    console.log(err)
} 
 }

listenServer()

