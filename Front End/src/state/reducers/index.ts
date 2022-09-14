import {combineReducers } from 'redux' ; 
import {userLoginReducer  } from './userLogin' 
import {userInfoReducer} from './userInfo'   
import { productivityReducer } from './productivity';
import { goalReducer } from './goal';
import { journalReducer } from './journal';
import { eventReducer } from './event';

const reducers = combineReducers({
  userLogin : userLoginReducer ,
  userInfo    : userInfoReducer , 
  productivity : productivityReducer ,
  goals : goalReducer ,
  journal : journalReducer ,
  event : eventReducer
})
export default reducers

export type stateType = ReturnType<typeof  reducers>