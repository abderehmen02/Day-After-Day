import { act } from "react-dom/test-utils"
import { userLoginAction , userLoginState , userLoginTypes } from "../types"

export const userLoginReducer =  (state : userLoginState = {} , action : userLoginAction )=>{
switch(action.type){
    case userLoginTypes.USER_LOGIIN_SUCCESS : {
        return {
    token : action.token
        }
    }
    case userLoginTypes.USER_LOGIN_ERROR  : {
        return {
            error : action.error
        }
    }
    case userLoginTypes.USER_LOGIN_REQUEST : {
        return {
            loading : true ,
        }
    }
    case userLoginTypes.USER_LOGIN_RESET : {
        return {}
    }
}
} 