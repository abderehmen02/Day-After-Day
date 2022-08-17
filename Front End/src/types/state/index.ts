
import { userLoginAction  , userLoginState } from './userLogin'
import { userInfoAction  , userInfoActionTypes } from './userInfo'
import { productivityAction  , productivityActionTypes} from './productivity'


export type Action = productivityAction  | userInfoAction 

export type allActionTypes = productivityActionTypes.PRODUCTIVITY_ERROR | productivityActionTypes.PRODUCTIVITY_REQUEST | productivityActionTypes.PRODUCTIVITY_RESET | productivityActionTypes.PRODUCTIVITY_SUCCUSS | userInfoActionTypes.USER_INFO_EDIT | userInfoActionTypes.USER_INFO_RESET