const jwt = require("jsonwebtoken")
const {WEB_TOKEN_SECRET }= require("../config/default")
const asyncWrapper  = require("../helpers/asyncWrapper")
const authorize = asyncWrapper((req , res , next)=>{
    const token = req.headers["authorization"].split(" ")[2] ; 
 
   const jwtObj = jwt.verify(token  , WEB_TOKEN_SECRET )
   if(!jwtObj) throw new Error("authorization failed / token is not valid")   
   req.user  = jwtObj._doc 
   next()
})

module.exports = authorize ; 