import{ combineReducers } from 'redux' ; 
import  { userLoginReducer  } from './userLogin'    


const reducers = combineReducers({
  userLogin : userLoginReducer
})
export default reducers