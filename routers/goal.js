const router = require("express").Router() ; 
const {getGoals , deleteGoal , updateGoal , createGoals } = require("../controllers/goal")
const authorize = require("../middleWares/authorization")

router.post("/"  , authorize , createGoals) ; 
router.delete("/:id" , authorize , deleteGoal) ; 
router.put("/:id"  , authorize , updateGoal)  ;
router.get("/" , authorize , getGoals )


module.exports  = router       ; 