const jwt = require("jsonwebtoken")
const asyncWraper = require("../../helpers/asyncWrapper")
const {EMAIL_TOKEN_SECRET} = require("../../config/default")
const userModel = require("../../db/models/user")

const confirmEmail = asyncWraper(async (user , token )=>{
const tokenUser = jwt.verify(token , EMAIL_TOKEN_SECRET) 
if(tokenUser._id === user.id){
    const newUser = await userModel.findOneAndUpdate({_id : user._id}  , {verified : true})
    if( !newUser ) return {error : "can not update user" } 
    return {success : true}
}   
return {error : "the token of the url  is not correct"}
})
module.exports  = confirmEmail ; 