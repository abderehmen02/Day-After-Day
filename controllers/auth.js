const asyncWrapper  = require('../helpers/asyncWrapper')
const jwt = require("jsonwebtoken")  ;
const user = require("../db/models/user")  ; 
const regester = asyncWrapper(async (req  , res )=>{
  console.log(req.body)
  const newUser  =  await  user.create(req.body)  ;
  console.log(newUser)  ; 
} )
module.exports  = {regester}