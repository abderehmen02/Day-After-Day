const express = require("express")
const router = express.Router()
const authorize = require("../middleWares/authorization")
const {createDailing , deleteDailing , updateDayling , getDaylings} = require("../controllers/dailing")


// setting the routers
router.get("/" , authorize , getDaylings)
router.post("/"  , authorize  , createDailing )
router.put("/:id"  , authorize , updateDayling )
router.delete("/:id" ,authorize ,  deleteDailing ) 
  

// exporting the router
module.exports = router