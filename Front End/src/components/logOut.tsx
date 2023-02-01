import React, { Dispatch } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@mui/material'
import {bindActionCreators} from 'redux'
import * as actionCreators from '../state/actionCreators'
import { goalActionTypes, productivityActionTypes, userInfoActionTypes, userLoginTypes } from '../types';
import { useNavigate } from 'react-router-dom' ; 
import { stateType } from '../state/reducers'


const LogOut = () : JSX.Element =>{

 const dispatch  = useDispatch()   ; 
const {emitAction} = bindActionCreators(actionCreators , dispatch) ; 
const navigate = useNavigate()

const logOut = ()=>{
  localStorage.removeItem("day-after-day") ; 
emitAction(userInfoActionTypes.USER_INFO_RESET ); 
emitAction(userLoginTypes.userLoginReset);
emitAction(productivityActionTypes.PRODUCTIVITY_RESET) ;
emitAction(goalActionTypes.GOAL_RESET);

navigate("/")
}


return (
    <Button  onClick={()=>{logOut(); dispatch({type: 'Reverse'}) }}   variant='outlined' >Log Out</Button>
  )
}

export default LogOut