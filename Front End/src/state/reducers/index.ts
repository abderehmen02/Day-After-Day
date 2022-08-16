import {combineReducers } from 'redux' ; 
import {userLoginReducer  } from './userLogin' 
import {userInfoReducer} from './userInfo'   
import { productivityReducer } from './productivity';


const reducers = combineReducers({
  userLogin : userLoginReducer ,
  userInfo    : userInfoReducer , 
  productivity : productivityReducer
})
export default reducers

export type stateType = ReturnType<typeof  reducers>