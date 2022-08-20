import React , { useState } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {addDays} from 'date-fns'
import { stateType } from '../state/reducers'
import {submitGoal} from  '../features/goals'
import { oneGoalState, userLoginState } from '../types'
import {bindActionCreators} from "redux"
import * as ActionCreators from '../state/actionCreators'
function Goal() {

   const state = useSelector((state : stateType)=> state)
   const dispatch = useDispatch()
   const userLoginInfo : userLoginState = useSelector((state: stateType) => state.userLogin )
   const { emitAction } = bindActionCreators(ActionCreators  , dispatch )
   const [titel, setTitel] = useState<string >("")   ;
   const [progress, setProgress] = useState<number>(0)  ;
   const [Error, setError] = useState(null)
   const [descreption, setDescreption] = useState<string>('') ;
   const [deadLine, setDeadLine] = useState<any>(addDays(new Date() , 3))
   const [completed, setCompleted] = useState(false) ;
   const body : object = {titel , progress , descreption , deadLine , completed }


   return (
    <div>
        <h1>goals</h1>
        <input type="text"     placeholder='titel'         value={titel} onChange={(e)=>{setTitel(e.target.value)}} />
        <input type="number"   placeholder='progress'   value={progress} onChange={(e)=>{ setProgress( parseInt( e.target.value ) )}} ></input> 
        <input type="text"     placeholder='descretion'    value={descreption} onChange={(e)=>{setDescreption(e.target.value)}}></input>
        <input type='checkbox' checked={completed}     onChange={()=>{setCompleted(!completed)}}></input>
      <label> dead line </label>  <input type='date' value={deadLine} onChange={(e)=>{setDeadLine(e.target.value)}}  /> 
      <button onClick={ ()=>{submitGoal(userLoginInfo.token , body , emitAction , setError)} } > submit     </button>
    </div>
  )
}

export default Goal