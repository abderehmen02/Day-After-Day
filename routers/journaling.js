const router = require("express").Router()
const {createJournaling , deleteJournal , updateJournal , getJournaling} = require('../controllers/journaling')
const authorize = require("../middleWares/authorization")


router.get("/"  , authorize , getJournaling)
router.post("/"  , authorize,createJournaling)
router.put("/:id"  , authorize , updateJournal )
router.delete("/:id" , authorize , deleteJournal)


module.exports = router ; 