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
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import goalLineImageBg from '../../assets/images/goal3.jpg'




// a componet to display the goal for the user
export const DisplayOneGoal = ({goal} : {goal : oneGoalState}): JSX.Element=>{
    return      <div className="displayGoalItem" >
      <div className="goalDescreption goalInfoItem" > <p> {goal.descreption}</p> </div>
      <div className="goalInfoItem">  {goal.deadLine.toString().slice( 0 , 10)} </div>
      <div className="goalInfoItem completedDisplay" > completed :  {  goal.completed ?    <i className="bi bi-check-circle-fill icon"></i> : <i className="bi bi-check-circle icon" ></i> }</div>
 <div className="girdProgress desktop" style={{width : "100%" , height : '100%'}} >      <CircularProgressbar styles={buildStyles({pathColor :'black' , textColor : 'black' })} value={goal.progress} text={`${goal.progress}%`} /> </div> 
    </div>
}



// goal image line

export const GoalImageLine = ()=>{
    return     <div className="lineContainer">
        <div className="line">
        </div>
                   <div className="goalLineImage img" style={{backgroundImage : `url(${goalLineImageBg})`}} > </div>
 
    </div>
}




// ***************************************************edit goals ******************************


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
    setBody({})
if(goal.deadLine!=  deadLine ) { setBody({...body , deadLine})  }
if(goal.descreption !== descreption ){ setBody({...body , descreption}) }
if(goal.completed  != completed ){  setBody({...body , completed}) }
if(goal.title !== title ){ setBody({...body , title}) }
if(goal.progress !== progress ){ setBody({...body , progress}) }
}


useEffect( ()=>{
    checkBody()
}, [deadLine , title ,  completed , progress , descreption])

    return <div  className="editGoalItem">
        <div className="editGoalGrid">
<input className="editTitle form-control" placeholder="title" type="text" value={title}  onChange={(e)=>{setTitle(e.target.value)}}  ></input>
<input className="editDescreption form-control" placeholder="descreption" type="text" value={descreption}  onChange={(e)=>{setDescreption(e.target.value)}} ></input>
<input  type="date"  value={deadLine}       onChange={(e)=>{setDeadLine(e.target.value)}} ></input>
<input type="number" className="form-control"  value={progress}    onChange={(e)=>{setProgress( parseInt( e.target.value))}} ></input>
<div className="editCompleted" > completed{ completed ? <i onClick={()=>{setCompleted(false)}} className="bi bi-check-square-fill m-1"></i> : <i className="bi bi-check-square m-1" onClick={()=>{setCompleted(true)}} ></i> }</div>
</div>
{ Object.getOwnPropertyNames(body).length ? <button className="btn btn-primary w-100 m-1" onClick={()=>{editGoal( goal._id , userLoginInfo.token , body , emitAction)}} >submit</button> : <div className="infoTextEditGoal " > change something </div>  }
    </div>
}



export const OneGoal = ({goal} : {goal : oneGoalState}): JSX.Element =>{
    const [buttonText, setButtonText] = useState<string>("edit")  ; 
    const userLoginInfo = useSelector((state : stateType)=>state.userLogin)  ;
    const dispatch = useDispatch()
    const {emitAction} = bindActionCreators(actionCreators , dispatch)
    
    return        <div className="oneGoal" >
        <div className="goalTitle" >{goal.title  }</div>   
<div className="oneGoalBody">      
{buttonText === "edit" ? <DisplayOneGoal goal={goal} /> :<EditOneGoal goal={goal} /> }
<div className="buttons">
        <button className="btn btn-primary m-1 " onClick={()=>{setButtonText(buttonText === "edit"  ? "display" : "edit" )}} >{buttonText === "edit" ? <span> edit <i className="bi bi-pencil-square"></i></span> : <span>display <i className="bi bi-cast"></i> </span> }  </button>
         <div className="girdProgress mobileDisplay" style={{width : "70px" , height : '70px'}} >      <CircularProgressbar  value={goal.progress} text={`${goal.progress}%`} /> </div>        
        <button className="btn btn-danger m-1 "  onClick={()=>{deleteGoal(goal._id , userLoginInfo.token ,emitAction)}} > delete <i className="bi bi-trash"></i>  </button>      
  </div></div>    </div>
}





// ****************** header ******************************************************



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
<img className="goalImg goalFirstImage" src={goalImageTwo} />

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


