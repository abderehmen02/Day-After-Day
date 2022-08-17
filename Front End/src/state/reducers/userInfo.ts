import { userInfoAction , userInfoEditAction , userInfoResetAction  ,  userInfoState,  userInfoActionTypes } from "../../types";



export const userInfoReducer =  (state :userInfoState= null, action : userInfoAction)=>{
   switch (action.type ) {
    case userInfoActionTypes.USER_INFO_EDIT : {
    return action.payload }
    case userInfoActionTypes.USER_INFO_RESET : {

        return null 
    }
    default : { return state }
   }
}