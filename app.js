const express = require("express") 
const app = express()
const cors = require("cors")
const authRouter = require("./routers/auth")

app.use(express.json())
app.use(cors())

//setting the routers 
app.use("/auth"  , authRouter )


module.exports = app     ;