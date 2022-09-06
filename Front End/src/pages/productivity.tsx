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
import { CreateProductivity , Graph, Header } from '../features/productivity/components';




export const Productivity:React.FC  = ()=> {
  const  dispatch = useDispatch()   ;
  const [date, setDate] = useState<string>(new Date().toISOString())
  type dayGraph = {day : string , value : number}[]
  const [days, setDays] = useState<any>([])
  const state = useSelector((state : stateType)=>state)
  console.log(state)
  const productivityInfo : productivityState = useSelector((state  : stateType )=> state.productivity) ;
  const [error, setError] = useState<object>({})
  const userLogin : userLoginState = useSelector(( state : stateType ) => state.userLogin)  
  const navigate = useNavigate()
  const [todayProductivity, setTodayProductivity] = useState<number| undefined>(0)
  const {emitAction}= bindActionCreators(actionsCreators , dispatch)  
 
  const generateDays  = ()=>{
    // we will desplay the productivity 30 days before the current day
    const formatedDays  = [] ; 
    for(let i  = 20  ; i>= 0  ; i--){
      let day = subDays(new Date() , i).toISOString().slice(0, 10) ; 
      let dayInProductivityInfo = productivityInfo.data?.allProductivities.find(( productivity )=>{
        return productivity.day === day
      })
      if( dayInProductivityInfo ){
        formatedDays.push({day , value : dayInProductivityInfo.value} )
        continue
      }
     formatedDays.push({day , value :  0 }) ;
} 
    setDays(formatedDays)
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





  return (
<div className='productivityPage' >
  <Header/>
  { productivityInfo.loading ? <div> loading...</div> :(
    <Graph days={days} />
)
}
<CreateProductivity/>
</div>
    )
}

