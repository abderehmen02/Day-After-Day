const asyncWrapper  = require('../helpers/asyncWrapper')
const jwt = require("jsonwebtoken")  ;
const userModel = require("../db/models/user")  ; 
const bcrypt = require("bcryptjs")
const { WEB_TOKEN_SECRET }  = require("../config/default");



const regester = asyncWrapper(async (req  , res )=>{

  // hashing the password to be able to store in the database sucretly
    if(!req.body.password) throw new Error("you must provide a password")
    const salt = await bcrypt.genSalt(10);
    if (!salt) throw new  Error('Something went with generating the salt in bycrybt');
    const hash = await bcrypt.hash(req.body.password , salt);
    if (!hash) throw  new  Error('Something went wrong hashing the password');
 

    // creating the user in the database 
  const newUser  =  await  userModel.create({...req.body , password : hash})  ;
  if(!newUser) throw new Error("can not create the user in the database")        ; 


  // creating the token
  const token = jwt.sign({...newUser} ,  WEB_TOKEN_SECRET  )
  if(!token) throw new Error("token can not be created")

  // deleting the password inorder not to send it in the front end
   newUser.password = undefined 
  console.log("new user");
  console.log(newUser)
  res.status(201).json({userObj :  newUser , token})

} )


const login = asyncWrapper( async (req, res)=>{
  if(!req.body.email ||  !req.body.password) throw new Error("email or password is missing")
 
  // fetch the user from the database 
  const  userObj = await userModel.findOne({email: req.body.email}) 
  if(!userObj)  throw new Error("user does not exist")

  // authonticate the user
  const isMatch = await bcrypt.compare(req.body.password , userObj.password) 
  if(!isMatch) throw new Error("password is inccorect")
 
  // delete the password inorder not to send it to the client
  delete userObj.password 

  // setting the token
  const token = jwt.sign( {...userObj} , WEB_TOKEN_SECRET )
  if(!token) throw new Error("error hepened in the token module")
  res.status(200).json({userObj , token})
})

module.exports  = {regester , login }