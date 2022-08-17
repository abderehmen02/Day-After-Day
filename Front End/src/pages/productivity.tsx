import React, { useDebugValue, useEffect } from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { stateType } from '../state/reducers'
import {loginSuccssAction , userLoginTypes , userInfoActionTypes , userInfoAction  , userInfoState, userInfoExistState} from '../../types/'
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid } from "recharts";
import { format, parseISO, subDays } from "date-fns";
import { emitAction } from '../state/actionCreators';
import { productivityActionTypes, productivityState, userLoginState } from '../types';
import { getProductivities } from '../actions/productivity';
import { useNavigate } from 'react-router-dom';





export const Productivity:React.FC  = ()=> {
  const productivityInfo : productivityState = useSelector((state  : stateType )=> state.productivity) ; 
  const  dispatch = useDispatch()      ;
  const userLogin : userLoginState = useSelector(( state : stateType ) => state.userLogin)  
  const navigate = useNavigate()
  


  useEffect(()=>{
  if(!userLogin) {navigate("/")}
emitAction(productivityActionTypes.PRODUCTIVITY_REQUEST)
const {data , error } = await await(getProductivities())


  },[])
  return (
<div>
  <input placeholder='your productivity' ></input>
</div>
    )
}

