const asyncWrapper  = require('../helpers/asyncWrapper')
const jwt = require("jsonwebtoken")  ;
const userModel = require("../db/models/user")  ; 
const bcrypt = require("bcryptjs")
const {sendErr} = require("../helpers/sendError")
const { WEB_TOKEN_SECRET }  = require("../config/default");
const {StatusCodes, INTERNAL_SERVER_ERROR} = require("http-status-codes");
const successStatus = require('../helpers/successStatus');
var subYears = require('date-fns/subYears')
var compareAsc = require('date-fns/compareAsc')


const regester = asyncWrapper(async (req  , res )=>{
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  console.log("request body date -------------")
  console.log(new Date(req.body.birthDate))
  console.log(new Date())
     // checking if all the data is valid
    if(!req.body.password || !req.body.email || !req.body.birthDate || !req.body.fullName ) throw sendErr(res , StatusCodes.BAD_REQUEST , 'all fields must be filled')
     if(req.body.fullName.length < 3 ){throw sendErr(res , StatusCodes.BAD_REQUEST , 'fullname should be more than 2 characters')}
    if(req.body.password.length < 8) {throw sendErr(res , StatusCodes.BAD_REQUEST , 'password should be more than 8 characters')}
    if(!req.body.email.match(emailFormat)){throw sendErr(res , StatusCodes.BAD_REQUEST , 'email not valid')}
    if( compareAsc( new Date(req.body.birthDate) , new Date( 1900 , 01 , 01 ) ) === -1  ){ throw  sendErr(res, StatusCodes.BAD_REQUEST , "check your birthDate" ) }
    if(compareAsc(new Date(req.body.birthDate) , subYears( new Date() , 4) ) === 1){ throw sendErr( res , StatusCodes.BAD_REQUEST , 'you should be older than 4 years') }


    // hashing the password to be able to store in the database sucretly
    const oldFullName = await userModel.findOne({fullName : req.body.fullName})
    const oldEmail = await userModel.findOne({email : req.body.email})
    if(oldFullName){ throw sendErr(res , StatusCodes.BAD_REQUEST , 'full name used')}
    if(oldEmail){throw sendErr(res , StatusCodes.BAD_REQUEST , 'email used' )}
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
  console.log("login fn trigered")
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
  console.log("i received the request")
  if(!req.params.token) sendErr(res , StatusCodes.BAD_REQUEST  , 'there is no token in the request')
  const user = jwt.verify( req.params.token , WEB_TOKEN_SECRET)
  if(!user) sendErr(res , StatusCodes.UNAUTHORIZED , "the token is not a valid token") ;
  console.log(user);
  successStatus(res , StatusCodes.OK , user )
}
module.exports  = {regester , login  , userAuth}