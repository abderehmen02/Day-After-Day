const asyncWrapper  = require('../helpers/asyncWrapper')
const jwt = require("jsonwebtoken")  ;
const userModel = require("../db/models/user")  ; 
const bcrypt = require("bcryptjs")
const { WEB_TOKEN_SECRET }  = require("../config/default");
const {StatusCodes, INTERNAL_SERVER_ERROR} = require("http-status-codes")


const regester = asyncWrapper(async (req  , res )=>{

  // hashing the password to be able to store in the database sucretly
    if(!req.body.password) throw new Error({error: "you must provide a password" , status : StatusCodes.FORBIDDEN })
    const salt = await bcrypt.genSalt(10);
    if (!salt) throw new  Error({ error : 'Something went with generating the salt in bycrybt'  , status : StatusCodes.INTERNAL_SERVER_ERROR });
    const hash = await bcrypt.hash(req.body.password , salt);
    if (!hash) throw  new  Error({ error :  'Something went wrong hashing the password' , status : StatusCodes.INTERNAL_SERVER_ERROR });
 

    // creating the user in the database 
  const newUser  =  await  userModel.create({...req.body , password : hash})  ;
  if(!newUser) throw new Error({ error: "can not create the user in the database"  , status : StatusCodes.INTERNAL_SERVER_ERROR})        ; 


  // creating the token
  const token = jwt.sign({...newUser} ,  WEB_TOKEN_SECRET  )
  if(!token) throw new Error({ error : "token can not be created"  , status : StatusCodes.INTERNAL_SERVER_ERROR })

  // deleting the password inorder not to send it in the front end
  newUser.password = undefined 
  res.status(201).json({userObj :  newUser , token})

} )


const login = asyncWrapper( async (req, res)=>{
  if(!req.body.email ||  !req.body.password) throw new Error("email or password is missing")
 
  // fetch the user from the database 
  const  userObj = await userModel.findOne({email: req.body.email}) 
  if(!userObj)  throw new Error({ error : "user does not exist"  , status : StatusCodes.NOT_FOUND })

  // authonticate the user
  const isMatch = await bcrypt.compare(req.body.password , userObj.password) 
  if(!isMatch) throw new Error({ error : "password is inccorect"  , status : StatusCodes.UNAUTHORIZED })
 
  // delete the password inorder not to send it to the client
   userObj.password  = undefined 

  // setting the token
  const token = jwt.sign( {...userObj} , WEB_TOKEN_SECRET )
  if(!token) throw new Error({error : "error hepened in the token module"  , StatusCodes : StatusCodes.INTERNAL_SERVER_ERROR })
  res.status(200).json({userObj , token})
})

module.exports  = {regester , login }