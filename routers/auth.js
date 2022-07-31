const express  = require("express")
const router = express.Router() ; 
const { regester, login } = require("../controllers/auth")
const asyncWrapper = require("../helpers/asyncWrapper")

// setting the router paths
router.post("/regester"   , regester )
router.post("/login"  , login)

module.exports = router