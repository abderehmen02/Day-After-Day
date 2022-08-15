const asyncWrapper  = require('../helpers/asyncWrapper')
const jwt = require("jsonwebtoken")  ;
const userModel = require("../db/models/user")  ; 
const bcrypt = require("bcryptjs")
const {sendErr} = require("../helpers/sendError")
const { WEB_TOKEN_SECRET }  = require("../config/default");
const {StatusCodes, INTERNAL_SERVER_ERROR} = require("http-status-codes");
const successStatus = require('../helpers/successStatus');


const regester = asyncWrapper(async (req  , res )=>{

  // hashing the password to be able to store in the database sucretly
    if(!req.body.password) throw sendErr({error: "you must provide a password" , status : StatusCodes.FORBIDDEN })
    const salt = await bcrypt.genSalt(10);
    if (!salt) { throw  new Error('Something went with generating the salt in bycrybt') ; sendErr( res , { error : 'Something went with generating the salt in bycrybt'  , status : StatusCodes.INTERNAL_SERVER_ERROR });}
    const hash = await bcrypt.hash(req.body.password , salt);
    if (!hash) {throw new Error('Something went wrong hashing the password' )  ;  sendErr(res ,{ error :  'Something went wrong hashing the password' , status : StatusCodes.INTERNAL_SERVER_ERROR })}
 

    // creating the user in the database 
  const newUser  =  await  userModel.create({...req.body , password : hash})  ;
  if(!newUser) { throw new Error("can not create the user in the database")  ; sendErr(res , { error: "can not create the user in the database"  , status : StatusCodes.INTERNAL_SERVER_ERROR})   }     ; 


  // creating the token
  const token = jwt.sign({...newUser} ,  WEB_TOKEN_SECRET  )
  if(!token){ throw new Error("token can not be created"  )  ;sendErr( res , { error : "token can not be created"  , status : StatusCodes.INTERNAL_SERVER_ERROR } ) }

  // deleting the password inorder not to send it in the front end
  newUser.password = undefined 
  res.cookie("day-after-day"  , token)
  successStatus(res ,StatusCodes.CREATED , {userObj :  newUser , token})
} )


const login = asyncWrapper( async (req, res)=>{
  if(!req.body.email ||  !req.body.password) throw new Error({error : "email or password is missing"   , status : StatusCodes.BAD_REQUEST })
  
  // fetch the user from the database 
  const  userObj = await userModel.findOne({email: req.body.email}) 
  if(!userObj)  { sendErr(res , { error : "user does not exist"  , status : StatusCodes.NOT_FOUND })  ;  throw new Error("user does not exist") }
  // authonticate the user
  const isMatch = await bcrypt.compare(req.body.password , userObj.password) 
  if(!isMatch) { throw new Error("password is inccorect")   ; sendErr(res  , { error : "password is inccorect"  , status : StatusCodes.UNAUTHORIZED }) }
 
  // delete the password inorder not to send it to the client
   userObj.password  = undefined 

  // setting the token
  const token = jwt.sign( {...userObj} , WEB_TOKEN_SECRET )
  if(!token) {throw new Error("error hepened in the token module")  ;  sendErr(res , {error : "error hepened in the token module"  , StatusCodes : StatusCodes.INTERNAL_SERVER_ERROR }) }
  console.log(userObj)
  console.log(token)
  res.cookie("day-after-day"  , token)
  successStatus(res , StatusCodes.OK , {userObj , token})
})

module.exports  = {regester , login }