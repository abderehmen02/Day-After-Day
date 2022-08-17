import React, { useState ,useEffect } from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { stateType } from '../state/reducers'
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid } from "recharts";
import { format, parseISO, subDays } from "date-fns";
import * as actionCreators from '../state/actionCreators';
import { loginSuccssAction , userLoginTypes , userInfoActionTypes , userInfoAction  , userInfoState, userInfoExistState , productivityActionTypes, productivityState, userLoginState } from '../types';
import { getProductivities } from '../actions/productivity';
import { useNavigate } from 'react-router-dom';
import {bindActionCreators} from 'redux'



export const Productivity:React.FC  = ()=> {
  const productivityInfo : productivityState = useSelector((state  : stateType )=> state.productivity) ; 
  const  dispatch = useDispatch()      ;
  const userLogin : userLoginState = useSelector(( state : stateType ) => state.userLogin)  
  const navigate = useNavigate()
  const [todayProductivity, setTodayProductivity] = useState<number| undefined>(0)
  const {emitAction} =  bindActionCreators(  actionCreators , dispatch)


  
  useEffect(()=>{
if(!userLogin) {navigate("/")}
emitAction(productivityActionTypes.PRODUCTIVITY_REQUEST)
console.log("cheking if the action is emited")
console.log(productivityInfo)
const fetchProductivities = async  ():Promise<any>=>{
const {data , error } = await getProductivities(userLogin.token)
if(data){
  emitAction(productivityActionTypes.PRODUCTIVITY_SUCCUSS, data)  ; 
}
else if(error){
  emitAction(productivityActionTypes.PRODUCTIVITY_ERROR , error )
}
else console.log("no data or error have been reveived")
}
  },[])
  return (
<div>
  <input placeholder='your productivity' type="number" value={todayProductivity} onChange={(e)=>{setTodayProductivity(  parseFloat(e.target.value)  )}} ></input>
</div>
    )
}

