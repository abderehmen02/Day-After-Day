const jwt = require("jsonwebtoken")
const {WEB_TOKEN_SECRET }= require("../config/default")
const asyncWrapper  = require("../helpers/asyncWrapper")
const authorize = asyncWrapper((req , res , next)=>{
    const token = req.headers["authorization"].split(" ")[1]
   const user = jwt.verify(token  , WEB_TOKEN_SECRET )
   if(!user) throw new Error("authorization failed / token is not valid")   
   req.user  = user 
   next()
})

module.exports = authorize ; 