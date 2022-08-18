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

import { loginSuccssAction , userLoginTypes , userInfoActionTypes , userInfoAction  , userInfoState, userInfoExistState , productivityActionTypes, productivityState, userLoginState, oneProductivityState } from '../types';
import { getProductivities } from '../actions/productivity';
import { useNavigate } from 'react-router-dom';
import {bindActionCreators} from 'redux'
import { emitAction } from '../state/actionCreators';
import CustomTooltip from '../features/productivity/tooltip';
import {submitProd} from '../features/productivity'

export const Productivity:React.FC  = ()=> {
  const productivityInfo : productivityState = useSelector((state  : stateType )=> state.productivity) ; 
  const  dispatch = useDispatch()   ;
   const [days, setDays] = useState<oneProductivityState[]>([])
  const state = useSelector((state : stateType)=>state)
  console.log("state")
  console.log(state)
  const userLogin : userLoginState = useSelector(( state : stateType ) => state.userLogin)  
  const navigate = useNavigate()
  const [todayProductivity, setTodayProductivity] = useState<number| undefined>(0)


  const generateDays = ()=>{
    // we will desplay the productivity 30 days before the current day
    const formatedDays= []
    for(let i  = 0  ; i< 30  ; i++){
     formatedDays.push({day : subDays(new Date() , i).toISOString().slice(0, 10)  , value :  5 })

    }
    setDays(formatedDays)
     }


  useEffect(()=>{
if(!userLogin) {navigate("/")}
emitAction( productivityActionTypes.PRODUCTIVITY_REQUEST)(dispatch)
const fetchProductivities = async  () :Promise<any>=>{
const {data , error } = await getProductivities(userLogin.token)
if(data){
  console.log("data from prod")
  console.log(data)
  emitAction( productivityActionTypes.PRODUCTIVITY_SUCCUSS, data)(dispatch)  ;
  generateDays() 
}
else if(error){
  emitAction(productivityActionTypes.PRODUCTIVITY_ERROR , error )
}
else console.log("no data or error have been reveived")
}
 fetchProductivities()
  },[])





  return (
<div>
  { productivityInfo.loading ? <div> loading...</div> :(
  <div>
<ResponsiveContainer width="70%" height={400}>
<AreaChart data={days} >
      <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
          </linearGradient>
        </defs>
  <Area dataKey="value" stroke="#2451B7" fill="url(#color)" />
</AreaChart>
</ResponsiveContainer>
 <XAxis   dataKey="day"
          axisLine={false}
          tickLine={false}
        />

        <YAxis    dataKey="value"
                  axisLine={false}
                  tickLine={false}
        />

        <Tooltip content={<CustomTooltip/>} />
  <input placeholder='your productivity' type="number" value={todayProductivity} onChange={(e)=>{setTodayProductivity(  parseFloat(e.target.value)  )}} ></input> 
  <button onClick={submitProd} >submit</button>
  </div>)
}
</div>
    )
}

