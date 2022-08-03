const express =require("express") ; 
const router = express.Router()  ; 
const { deleteProd , getProds , creatProd , updateProd }   = require("../controllers/prod")
const authorize = require("../middleWares/authorization")

router.get("/" ,  authorize ,  getProds )  ; 
router.delete("/" , authorize , deleteProd )  ; 
router.put('/' , authorize , updateProd )  ; 
router.post("/"  , authorize ,  creatProd )


module.exports = router  ; 