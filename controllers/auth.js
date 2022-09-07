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
    if(!req.body.password) throw sendErr(res , StatusCodes.BAD_REQUEST , 'password not defiened')
    const salt = await bcrypt.genSalt(10);
    if (!salt) { sendErr(res , StatusCodes.INTERNAL_SERVER_ERROR , 'can not generate salt')}
    const hash = await bcrypt.hash(req.body.password , salt);
    if (!hash) {sendErr(res ,  StatusCodes.INTERNAL_SERVER_ERROR , 'can not generate hash' )}
 

    // creating the user in the database 
  const newUser  =  await  userModel.create({...req.body , password : hash})  ;
  if(!newUser) { sendErr(res , StatusCodes.INTERNAL_SERVER_ERROR , 'can not create the user , try to use another email ')   }     ; 


  // creating the token
  const token = jwt.sign({...newUser} ,  WEB_TOKEN_SECRET  )
  if(!token){ sendErr(res , StatusCodes.INTERNAL_SERVER_ERROR , 'can not generate token') }

  // deleting the password inorder not to send it in the front end
  newUser.password = undefined 
  res.cookie("day-after-day"  , token)
  successStatus(res ,StatusCodes.CREATED , {userObj :  newUser , token})
} )



//*************************** login */

const login = asyncWrapper( async (req, res)=>{
  console.log("login fn")
  if(!req.body.email ||  !req.body.password) sendErr(res ,StatusCodes.BAD_REQUEST , 'please provide and email and password')
  
  // fetch the user from the database 
  const  userObj = await userModel.findOne({email: req.body.email}) 
  if(!userObj)  { sendErr(res  , StatusCodes.NOT_FOUND , 'can not find user')  }
  // authonticate the user
  const isMatch = await bcrypt.compare(req.body.password , userObj.password) 
  if(!isMatch) { sendErr(res , StatusCodes.BAD_REQUEST , 'password incorrect')}
 
  // delete the password inorder not to send it to the client
   userObj.password  = undefined 

  // setting the token
  const token = jwt.sign( {...userObj} , WEB_TOKEN_SECRET )
  if(!token) {sendErr(res , StatusCodes.INTERNAL_SERVER_ERROR , 'can not generte token')}
  res.cookie("day-after-day"  , token)
  console.log(token)
  successStatus(res , StatusCodes.OK , {userObj , token})
})

const userAuth = (req , res)=>{
  if(!req.params.token) sendErr(res , StatusCodes.BAD_REQUEST  , 'there is no token in the request')
  const user = jwt.verify( req.params.token , WEB_TOKEN_SECRET)
  if(!user) sendErr(res , StatusCodes.UNAUTHORIZED , "the token is not a valid token") ;
  successStatus(res , StatusCodes.OK , user )
}
module.exports  = {regester , login  , userAuth}