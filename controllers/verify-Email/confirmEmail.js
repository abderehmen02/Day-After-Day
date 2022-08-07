const jwt = require("jsonwebtoken")
const asyncWraper = require("../../helpers/asyncWrapper")
const {EMAIL_TOKEN_SECRET} = require("../../config/default")
const userModel = require("../../db/models/user")

const verifyUser = asyncWraper(async (user , token )=>{
const tokenUser = jwt.verify(token , userModel) 
if(tokenUser._id === user.id){
    const newUser = userModel.findOneAndUpdate({_id : user._id}  , {verify : true})
    if(!new newUser) return {error : "can not update user" } 
    return {success : true}
}   
return {error : "the url is not correct"}
})
module.exports  = verifyUser ; 