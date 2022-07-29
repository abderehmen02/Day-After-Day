const express  = require("express")
const router = express.router() ; 
const {signUp} = require("../")
const asyncWrapper = require("../helpers/asyncWrapper")

// setting the router paths

router.post("/regester"   , signUp )


module.exports = router