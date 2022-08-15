const express  = require("express")
const router = express.Router() ; 
const { regester, login  , userAuth} = require("../controllers/auth")



// setting the authontification router
router.post("/regester"   ,  regester )
router.post("/login"  , login)
router.get("/auth/:token" , userAuth)

module.exports = router