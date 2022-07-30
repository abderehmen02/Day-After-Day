const express  = require("express")
const router = express.Router() ; 
const { regester } = require("../controllers/auth")
const asyncWrapper = require("../helpers/asyncWrapper")

// setting the router paths
router.post("/regester"   , regester )
router.get("/regester"  , (req , res)=>{
    console.log("regester")
    res.send("hello")
})

module.exports = router