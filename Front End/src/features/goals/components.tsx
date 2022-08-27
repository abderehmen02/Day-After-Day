import { oneGoalState } from "../../types"
import React , {useState , useEffect} from "react"
import {useSelector , useDispatch } from 'react-redux'
import { stateType } from "../../state/reducers"
import {bindActionCreators} from 'redux'
import * as actionCreators  from '../../state/actionCreators'
import { deleteGoal, editGoal } from "./functions"
import { submitGoal } from "./functions"
import {addDays} from 'date-fns'
import goalImage from "../../assets/images/goal.png"
import { userLoginState } from "../../types"
import goalImageTwo from '../../assets/images/goal2.png'
// a componet to display the goal for the user
export const DisplayOneGoal = ({goal} : {goal : oneGoalState}): JSX.Element=>{
    return      <div className="displayGoalItem" >
      <div className="goalDescreption" >  {goal.descreption} </div>
      <div>  {goal.deadLine.toString().slice( 0 , 10)} </div>
      <div> completed :  {  goal.completed ?    <i className="bi bi-check-circle-fill icon"></i> : <i className="bi bi-check-circle icon" ></i> }</div>

      <div className="girdProgress">  {goal.progress }  </div>
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
    const [buttonText, setButtonText] = useState<string>("edit")  ; 
    const userLoginInfo = useSelector((state : stateType)=>state.userLogin)  ;
    const dispatch = useDispatch()
    const {emitAction} = bindActionCreators(actionCreators , dispatch)
    
    return        <div className="oneGoal" >
        <div className="h6" >{goal.title}</div>   
<div className="oneGoalBody">      
{buttonText === "edit" ? <DisplayOneGoal goal={goal} /> :<EditOneGoal goal={goal} /> }
<div className="buttons">
        <button className="btn btn-primary m-1 " onClick={()=>{setButtonText(buttonText === "edit"  ? "display" : "edit" )}} >{buttonText === "edit" ? <span> edit <i className="bi bi-pencil-square"></i></span> : <span>display <i className="bi bi-cast"></i> </span> }  </button>
        <button className="btn btn-danger m-1 "  onClick={()=>{deleteGoal(goal._id , userLoginInfo.token ,emitAction)}} > delete <i className="bi bi-trash"></i>  </button>      
  </div></div>    </div>
}



export const Header = () : JSX.Element=>{
   const [title, setTitle] = useState<string>('')
   const [progress, setProgress] = useState<number>(0)  ;
   const [descreption, setDescreption] = useState<string>('') ;
   const [deadLine, setDeadLine] = useState<any>(addDays(new Date() , 3))
   const [completed, setCompleted] = useState(false) ;
   const dispatch = useDispatch()
   const body : object = {title , progress , descreption , deadLine , completed }
   const userLoginInfo : userLoginState = useSelector((state: stateType) => state.userLogin )
   const { emitAction } = bindActionCreators(actionCreators  , dispatch )


  return   <div className='goalPageHeader' >
<img className="goalImg" src={goalImageTwo} />

<div className='createGoal' >
 <div className='h4 goalTitle' > Create New Goal <i className="bi bi-plus-circle-fill"></i></div>
<div className="createGorlGrid">
     <input type="text"     placeholder='titel'   className='form-control '   value={title} onChange={(e)=>{setTitle(e.target.value)}} />
      <input type="number"   placeholder='progress'  className='form-control' value={progress} onChange={(e)=>{ setProgress( parseInt( e.target.value ) )}} />
      <input type="text"     placeholder='descretion' className='form-control'   value={descreption} onChange={(e)=>{setDescreption(e.target.value)}}  />
      <div className='goalCheck' > completed {completed ? <i className="bi bi-check-circle-fill icon" onClick={()=>{setCompleted(!completed)}}  ></i> : <i className="bi bi-check-circle icon" onClick={()=>{setCompleted(!completed)}} ></i>
} </div>
     <input type='date' className='form-control' value={deadLine} onChange={(e)=>{setDeadLine(e.target.value)}}  /> 
      <button onClick={ ()=>{submitGoal(userLoginInfo.token , body , emitAction )} } className="btn btn-primary form-control" > submit     </button>
    </div>
</div>    
<img src={goalImage}  className="goalImg" />

   </div>  
}


export const MapGoals = ({ allGoals } : {allGoals : oneGoalState[]}) : JSX.Element=>{
    return <div className="allGoals" >
<div className="title AllGoalsBorder" > All Goals  <i className="bi bi-card-checklist m-2 "></i> </div>  
      <div className="mappingAllGoals ">  {
allGoals.map(goal =>{
    return  <OneGoal goal={goal} /> 
})
        }</div>
</div>
}