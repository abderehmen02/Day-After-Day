const express =require("express") ; 
const router = express.Router()  ; 
const { deleteProd , getProds , creatProd , updateProd }   = require("../controllers/prod")
const authorize = require("../middleWares/authorization")

router.get("/" ,  authorize ,  getProds )  ; 
router.delete("/:id" , authorize , deleteProd )  ; 
router.put('/:id' , authorize , updateProd )  ; 
router.post("/"  , authorize ,  creatProd )


module.exports = router  ; 