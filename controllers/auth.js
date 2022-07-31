const asyncWrapper  = require('../helpers/asyncWrapper')
const jwt = require("jsonwebtoken")  ;
const user = require("../db/models/user")  ; 
const bcrypt = require("bcryptjs")
const { JSON_SECRET }  = require("../config/default")


const regester = asyncWrapper(async (req  , res )=>{

  // hashing the password to be able to store in the database sucretly
    if(!req.body.password) throw new Error("you must provide a password")
    const salt = await bcrypt.genSalt(10);
    if (!salt) throw new  Error('Something went with generating the salt in bycrybt');
    const hash = await bcrypt.hash(req.body.password , salt);
    if (!hash) throw  new  Error('Something went wrong hashing the password');
 
  // creating the user in the database 
  const newUser  =  await  user.create({...req.body , password : hash})  ;
  if(!newUser) throw new Error("can not create the user in the database")        ; 
console.log(newUser)
console.log("new user")
  // creating the token
  const token = jwt.sign({...newUser} ,  JSON_SECRET  )
  if(!token) throw new Error("token can not be created")

  // deleting the password inorder not to send it in the front end
  delete newUser.password 
  res.status(201).json({newUser , token})

} )
module.exports  = {regester}