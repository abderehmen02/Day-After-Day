const asyncWrapper  = require('../helpers/asyncWrapper')
const jwt = require("jsonwebtoken")  ;
const user = require("../db/models/user")  ; 
const bycrypt = require("bcryptjs")
const { JSON_SECRET }  = require("../config/default")


const regester = asyncWrapper(async (req  , res )=>{
  if(!req.body.password) throw new Error("you must provide a password")
  // hashing the password to be able to store in the database sucretly
  


  const newUser  =  await  user.create(req.body)  ;
  if(!newUser) throw new Error("can not create the user in the database")        ; 
  const token = jwt.sign(newUser ,  JSON_SECRET  )
  if(!token) throw new Error("token can not be created")
} )
module.exports  = {regester}