import { oneGoalState } from "../../types"
import React , {useState , useEffect} from "react"
import {useSelector , useDispatch } from 'react-redux'
import { stateType } from "../../state/reducers"
import {bindActionCreators} from 'redux'
import * as actionCreators  from '../../state/actionCreators'
import { editGoal } from "./functions"


// a componet to display the goal for the user
export const DisplayOneGoal = ({goal} : {goal : oneGoalState}): JSX.Element=>{
    console.log(goal.deadLine.toString().slice(0 , 10))
    console.log("deadline")
    return      <div>
      <span>  {goal.title}  </span>
       <span>  {goal.descreption} </span>
      <span>  {goal.deadLine.toString().slice( 0 , 10)} </span>

    </div>
}



// a component for editing a  goal 
export const EditOneGoal= ({goal } : {goal : oneGoalState} ) : JSX.Element=>{
    const userLoginInfo = useSelector((state : stateType)=>state.userLogin)
    const [descreption, setDescreption] = useState<string>(goal.descreption)
    const [deadLine, setDeadLine] = useState<any>(goal.deadLine)
    const [title, setTitle] = useState<string>(goal.title)
    const [completed, setCompleted] = useState<boolean>(goal.completed)
    const [progress, setProgress] = useState<number>(goal.progress)
    const dispatch  = useDispatch()
    const {emitAction}     = bindActionCreators( actionCreators  ,  dispatch)
    const [body, setBody] = useState({})
 
const checkBody = ()=>{
if(goal.deadLine!=  deadLine ) { setBody({...body , deadLine})  }
if(goal.descreption !== descreption ){ setBody({...body , descreption}) }
if(goal.completed  != completed ){  setBody({...body , completed}) }
if(goal.title !== title ){ setBody({...body , title}) }
if(goal.progress !== progress ){ setBody({...body , progress}) }
}


useEffect( ()=>{
    checkBody()
}, [deadLine , title ,  completed , progress , descreption])
console.log(body )
console.log("edit body")
    return <div>
<input placeholder="title" type="text" value={title}  onChange={(e)=>{setTitle(e.target.value)}}  ></input>
<input placeholder="descreption" type="text" value={descreption}  onChange={(e)=>{setDescreption(e.target.value)}} ></input>
<input type="date" value={deadLine}       onChange={(e)=>{setDeadLine(e.target.value)}} ></input>
<input type="number"  value={progress}    onChange={(e)=>{setProgress( parseInt( e.target.value))}} ></input>
<input type='checkbox' checked={completed} onChange={()=>{setCompleted(!completed)}} ></input>
{ Object.getOwnPropertyNames(body).length ? <button onClick={()=>{editGoal( goal._id , userLoginInfo.token , body , emitAction)}} >submit</button> : <div> change something </div>  }
    </div>
}



export const OneGoal = ({goal} : {goal : oneGoalState}): JSX.Element =>{
    const [buttonText, setButtonText] = useState<string>("edit")
    
    return        <div>
{buttonText === "edit" ? <DisplayOneGoal goal={goal} /> :<EditOneGoal goal={goal} /> }
        <button onClick={()=>{setButtonText(buttonText === "edit"  ? "display" : "edit" )}} >{buttonText}</button>
    </div>
}