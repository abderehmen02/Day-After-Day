import { emitAction } from "../../state/actionCreators";
import { loginBody, userLoginTypes } from "../../types";
import { publicPost } from "../../utils";
const path : string = "auth/login"

export const login = async(body : loginBody , loginInState : Function , loginError: Function , navigate  : Function )=>{
    emitAction(userLoginTypes.userLoginRequest)

const {data , error }  = await publicPost(path , body )
if(data){
localStorage.setItem("day-after-day"  , data.token)
loginInState(data.token , data.userObj) ; 
navigate('/productivity')
 } 
else if(error){
    loginError(error)
}}