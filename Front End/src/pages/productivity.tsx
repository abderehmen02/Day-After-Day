import React, { useState ,useEffect, useDebugValue, useCallback } from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { stateType } from '../state/reducers'
import '../features/productivity/index.css'
import { format, parseISO, subDays } from "date-fns";
import { loginSuccssAction , userLoginTypes , userInfoActionTypes , userInfoAction  , userInfoState, userInfoExistState , productivityActionTypes, productivityState, userLoginState, oneProductivityState } from '../types';
import { getProductivities } from '../actions/productivity';
import { useNavigate } from 'react-router-dom';
import {bindActionCreators} from 'redux'
import * as actionsCreators from '../state/actionCreators';
import CustomTooltip from '../features/productivity/tooltip';
import {submitProd , deleteProd} from '../features/productivity'
import LogOut from '../components/logOut';
import { CreateProductivity , Graph } from '../features/productivity/components';




export const Productivity:React.FC  = ()=> {
  const  dispatch = useDispatch()   ;
  const [date, setDate] = useState<string>(new Date().toISOString())
  type dayGraph = {day : string , value : number}[]
  const [days, setDays] = useState<any>([])
  const state = useSelector((state : stateType)=>state)
  const productivityInfo : productivityState = useSelector((state  : stateType )=> state.productivity) ;
  console.log(productivityInfo) 
  console.log("productivity info")
  const [error, setError] = useState<object>({})
  console.log("state from productivity")
  console.log(state)
  const userLogin : userLoginState = useSelector(( state : stateType ) => state.userLogin)  
  const navigate = useNavigate()
  const [todayProductivity, setTodayProductivity] = useState<number| undefined>(0)
  const {emitAction}= bindActionCreators(actionsCreators , dispatch)  
 
  const generateDays  = ()=>{
    // we will desplay the productivity 30 days before the current day
    const formatedDays  = []
     console.log("generating days") ;   
    for(let i  = 0  ; i< 30  ; i++){
      console.log("for loop")
      let day = subDays(new Date() , i).toISOString().slice(0, 10) ; 
      console.log("day")
      console.log(day)
      let dayInProductivityInfo = productivityInfo.data?.allProductivities.find(( productivity )=>{
        console.log(productivity.day)
        return productivity.day === day
      })
      console.log(productivityInfo)
      if( dayInProductivityInfo ){
        console.log("condition is true")
        formatedDays.push({day , value : dayInProductivityInfo.value} )
        continue
      }
     formatedDays.push({day , value :  0 }) ;
     
    }
    setDays(formatedDays)
    console.log("days generated")
     } 
useEffect(()=>{
generateDays()

}  , [productivityInfo])



     
  useEffect(()=>{

if(!userLogin) {navigate("/")}
emitAction( productivityActionTypes.PRODUCTIVITY_REQUEST)
const fetchProductivities = async  () :Promise<any>=>{
const {data , error } = await getProductivities(userLogin.token)
if(data){
  emitAction( productivityActionTypes.PRODUCTIVITY_SUCCUSS, data)  ;
}
else if(error){
  emitAction(productivityActionTypes.PRODUCTIVITY_ERROR , error )
}
else console.log("no data or error have been reveived")
}
 fetchProductivities()
  },[])




console.log("date prod")
console.log(date)

  return (
<div className='productivityPage' >
  { productivityInfo.loading ? <div> loading...</div> :(
    <Graph days={days} />
)
}
<CreateProductivity/>
</div>
    )
}

