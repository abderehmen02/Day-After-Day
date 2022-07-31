const express  = require("express")
const router = express.Router() ; 
const { regester, login } = require("../controllers/auth")




// setting the authontification router
router.post("/regester"   , regester )
router.post("/login"  , login)


module.exports = router