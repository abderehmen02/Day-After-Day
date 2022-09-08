import {combineReducers } from 'redux' ; 
import {userLoginReducer  } from './userLogin' 
import {userInfoReducer} from './userInfo'   
import { productivityReducer } from './productivity';
import { goalReducer } from './goal';
import { journalReducer } from './journal';

const reducers = combineReducers({
  userLogin : userLoginReducer ,
  userInfo    : userInfoReducer , 
  productivity : productivityReducer ,
  goals : goalReducer ,
  journal : journalReducer
})
export default reducers

export type stateType = ReturnType<typeof  reducers>