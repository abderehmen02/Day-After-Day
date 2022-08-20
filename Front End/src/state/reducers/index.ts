import {combineReducers } from 'redux' ; 
import {userLoginReducer  } from './userLogin' 
import {userInfoReducer} from './userInfo'   
import { productivityReducer } from './productivity';
import { goalReducer } from './goal';


const reducers = combineReducers({
  userLogin : userLoginReducer ,
  userInfo    : userInfoReducer , 
  productivity : productivityReducer ,
  goalReducer : goalReducer
})
export default reducers

export type stateType = ReturnType<typeof  reducers>