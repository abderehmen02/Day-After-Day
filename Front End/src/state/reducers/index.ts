import {combineReducers } from 'redux' ; 
import {userLoginReducer  } from './userLogin' 
import {userInfoReducer} from './userInfo'   


const reducers = combineReducers({
  userLogin : userLoginReducer ,
  userInfo    : userInfoReducer
})
export default reducers

export type stateType = ReturnType<typeof  reducers>