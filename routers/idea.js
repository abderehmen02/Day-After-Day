const { createNewIdea } =  require("../controllers/idea")
const asyncWrapper = require("../helpers/asyncWrapper")
const express = require("express")
const authorize = require("../middleWares/authorization")
const router = express.Router()



router.post("/" , authorize , createNewIdea  )

module.exports = router ; 