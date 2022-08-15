import { act } from "react-dom/test-utils"
import { userLoginAction , userLoginState , userLoginTypes } from '../../types'

export const userLoginReducer =  (state : userLoginState = {} , action : userLoginAction )=>{
switch(action.type){
    case userLoginTypes.userLoginSuccuss : {
        return {
    token : action.token
        }
    }
    case userLoginTypes.userLoginFail : {
        return {
            error : action.error
        }
    }
    case userLoginTypes.userLoginRequest : {
        return {
            loading : true ,
        }
    }
    case userLoginTypes.userLoginReset : {
        return {}
    }
    default :  return state
}
} 