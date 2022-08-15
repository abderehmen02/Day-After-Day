import { Dispatch } from "redux"
import {loginSuccssAction , userLoginTypes , userInfoActionTypes , userInfoAction  , userInfoState} from '../../types/'
export const login  = (token : string, userObj : userInfoState ) : void=>{
    return (dispatch : Dispatch<loginSuccssAction | userInfoAction > )=>{
           dispatch( {  type : userLoginTypes.userLoginSuccuss ,
              token }) ; 
           dispatch({
            type: userInfoActionTypes.USER_INFO_EDIT , 
            payload : userObj 
           })
    }

}