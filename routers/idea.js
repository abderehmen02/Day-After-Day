const { createNewIdea , editIdea  , getIdeas ,deleteIdea } =  require("../controllers/idea")
const asyncWrapper = require("../helpers/asyncWrapper")
const express = require("express")
const authorize = require("../middleWares/authorization")
const router = express.Router()


// setting all the routers
router.post("/" , authorize , createNewIdea  )
router.get("/"  , authorize , getIdeas )
router.delete("/:id" , authorize ,  deleteIdea )
router.put("/:id"  , authorize , editIdea)
module.exports = router ; 