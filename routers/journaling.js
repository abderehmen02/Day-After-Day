const router = require("express").Router()
const {createJournaling , deleteJournal , updateJournal , getJournaling} = require('../controllers/journaling')
const authorize = require("../middleWares/authorization")


module.exports = router.get("/"  , authorize , getJournaling).post("/"  , authorize,createJournaling).put("/:id"  , authorize , updateJournal ).delete("/:id" , authorize , deleteJournal)