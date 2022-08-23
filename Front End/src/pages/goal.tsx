import React , { useState  , useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {addDays} from 'date-fns'
import { stateType } from '../state/reducers'
import {getGoals, submitGoal} from  '../features/goals'
import { goalState, oneGoalState, userLoginState } from '../types'
import {bindActionCreators} from "redux"
import {OneGoal} from '../features/goals/components'
import * as ActionCreators from '../state/actionCreators'
import LogOut from '../components/logOut'



function Goal() {

   const state = useSelector((state : stateType)=> state)
   console.log("state from goal")
   console.log(state)
   const dispatch = useDispatch()
   const userLoginInfo : userLoginState = useSelector((state: stateType) => state.userLogin )
   const userGoalsInfo : goalState = useSelector((state : stateType) =>state.goals)
   const { emitAction } = bindActionCreators(ActionCreators  , dispatch )
   const [title, setTitle] = useState<string>('')
   const [progress, setProgress] = useState<number>(0)  ;
   const [Error, setError] = useState(null)
   const [descreption, setDescreption] = useState<string>('') ;
   const [deadLine, setDeadLine] = useState<any>(addDays(new Date() , 3))
   const [completed, setCompleted] = useState(false) ;
   const body : object = {title , progress , descreption , deadLine , completed }


// getting all the goals when the page rendres
useEffect(() => {
    userLoginInfo.token &&   getGoals( userLoginInfo.token , emitAction )
}
, [])
console.log(userGoalsInfo)
console.log("goals info")

    if(userGoalsInfo.loading){
      return <h1>getting goals</h1>
    }

   return (
    <div>  <div>      <input type="text"     placeholder='titel'         value={title} onChange={(e)=>{setTitle(e.target.value)}} />
        <input type="number"   placeholder='progress'   value={progress} onChange={(e)=>{ setProgress( parseInt( e.target.value ) )}} />
        <input type="text"     placeholder='descretion'    value={descreption} onChange={(e)=>{setDescreption(e.target.value)}}  />
        <input type='checkbox' checked={completed}     onChange={()=>{setCompleted(!completed)}} />
      <label> dead line </label>  <input type='date' value={deadLine} onChange={(e)=>{setDeadLine(e.target.value)}}  /> 
      <button onClick={ ()=>{submitGoal(userLoginInfo.token , body , emitAction )} } > submit     </button>
      <div> {       userGoalsInfo.data.allGoals.map((goal : oneGoalState)=>{
          return <div>
            <OneGoal goal={goal} />
            </div>
        })
        }</div>
        <LogOut/> 
      </div></div>
   )}

export default Goal