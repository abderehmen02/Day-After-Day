const router = require("express").Router() ; 
const { getEvents, createEvent, deleteEvent } = require("../controllers/events");
const authorize = require("../middleWares/authorization")

router.get('/' ,  authorize , getEvents)
router.post('/' , authorize , createEvent)
router.delete('/:id' , authorize , deleteEvent)
router.put('/id'  , authorize , deleteEvent )


module.exports = router