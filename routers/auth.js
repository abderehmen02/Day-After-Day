const express  = require("express")
const router = express.Router() ; 
const { regester, login } = require("../controllers/auth")
const {sendEmail} = require("../controllers/verify-Email")



// setting the authontification router
router.post("/regester"   , sendEmail ,  regester )
router.post("/login"  , login)


module.exports = router