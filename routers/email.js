const express = require("express")
const { sendVisitingEmail } = require("../controllers/emails")
const router = express.Router()
router.post('/visitingEmail' , sendVisitingEmail)


module.exports = router