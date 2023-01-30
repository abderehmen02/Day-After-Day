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
import { Checkbox ,  Box , FormControlLabel, Stack , styled, TextField, Typography, Button, Grid } from "@mui/material"



//************************************ display goal */

// a componet to display the goal for the user
export const DisplayOneGoal = ({goal} : {goal : oneGoalState}): JSX.Element=>{
    return      <Stack alignItems="center" width="60%" gap="32px" justifyContent="space-around" >
      <Typography textAlign="center" variant="h4" sx={{textTransform : 'capitalize'}} fontWeight="bolder">{goal.title  }</Typography>   
      <Typography  textAlign="center" > {goal.descreption}</Typography>
      <Stack direction="row" alignItems="center" justifyContent="space-around" width="60%">
      <Typography>  {goal.deadLine.toString().slice( 0 , 10)} </Typography>
      <Typography> completed :  {  goal.completed ?    <i className="bi bi-check-circle-fill icon"></i> : <i className="bi bi-check-circle icon" ></i> }</Typography>
      </Stack>
 {/* <div  style={{width : "100%" , height : '100%'}} >      <CircularProgressbar styles={buildStyles({pathColor :'black' , textColor : 'black' })} value={goal.progress} text={`${goal.progress}%`} /> </div>  */}
    </Stack>
}



// goal image line

export const GoalImageLine = ()=>{
    return     <div className="lineContainer">
        <div className="line" >
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

    return <Stack gap="16px" width="60%"  padding="24px">
<Stack direction="row" gap="16px" >
<TextField  label='title' placeholder="new title" variant="filled" type="text" fullWidth value={title}  onChange={(e)=>{setTitle(e.target.value)}}  ></TextField>
<TextField  label='New deadline'  variant="filled"   value={deadLine}  fullWidth  type="date"    onChange={(e)=>{setDeadLine(e.target.value)}} ></TextField>
<TextField  label="New progress"  type="number" fullWidth variant="filled" value={progress}    onChange={(e)=>{setProgress( parseInt( e.target.value))}} ></TextField>
<Typography textAlign="center" > completed{ completed ? <i onClick={()=>{setCompleted(false)}} className="bi bi-check-square-fill m-1"></i> : <i className="bi bi-check-square m-1" onClick={()=>{setCompleted(true)}} ></i> }</Typography>
</Stack>
<TextField multiline rows={2}  placeholder="New descreption" variant="filled" label="descreption" type="text" value={descreption}  onChange={(e)=>{setDescreption(e.target.value)}} />
{ Object.getOwnPropertyNames(body).length ? <button className="btn btn-primary w-100 m-1" onClick={()=>{editGoal( goal._id , userLoginInfo.token , body , emitAction)}} >submit</button> : <Typography color={(theme)=>theme.palette.secondary.dark} textAlign="center" > <i className="bi bi-exclamation-triangle-fill"></i> Please change something before submiting </Typography> }
</Stack>}


// ****************************************One goal ***********************
export const OneGoal = ({goal} : {goal : oneGoalState}): JSX.Element =>{
    const [buttonText, setButtonText] = useState<string>("edit")  ; 
    const userLoginInfo = useSelector((state : stateType)=>state.userLogin)  ;
    const dispatch = useDispatch()
    const {emitAction} = bindActionCreators(actionCreators , dispatch)
    
    return        <Stack bgcolor={(theme)=>theme.palette.white.light} direction="row" paddingX="40px" width="90%" sx={{borderRadius: '8px' ,  border: '1px solid black', boxShadow : '2px 2px 4px black'}} paddingY="20px" borderRadius={1} alignItems="center" justifyContent="space-between" minHeight="300px" gap="40px" >
        {/* <div className="girdProgress mobileDisplay" style={{width : "70px" , height : '70px' , border: '2px solid green'}} >       */}
        <Box style={{width: "88px" , height: "88px" }} >
        <CircularProgressbar  value={goal.progress} text={`${goal.progress}%`} /> 
        </Box>
        {/* </div> */}
 {buttonText === "edit" ? <DisplayOneGoal goal={goal} /> :<EditOneGoal goal={goal} /> }
<Stack gap="32px" >
        <Button variant="primary" onClick={()=>{setButtonText(buttonText === "edit"  ? "display" : "edit" )}} >{buttonText === "edit" ? <span> edit <i className="bi bi-pencil-square"></i></span> : <span>display <i className="bi bi-cast"></i> </span> }  </Button>        
        <Button variant="error" onClick={()=>{deleteGoal(goal._id , userLoginInfo.token ,emitAction)}} > delete <i className="bi bi-trash"></i>  </Button>      
</Stack>    </Stack>
}





// ****************** header + create goal ******************************************************


const StyledCreateGoalContainer = styled(Stack)(({theme})=>({
    backgroundColor : theme.palette.white.light ,
border: `2px solid #000` ,
padding: '16px 32px'   ,
width : '50%' ,
gap: '40px' ,
alignItems : 'center' ,
borderRadius : '8px' ,
boxShadow : '2px 2px 4px black'
}))
export const CreateGoal = () : JSX.Element=>{
   const [title, setTitle] = useState<string>('')
   const [progress, setProgress] = useState<number>(0)  ;
   const [descreption, setDescreption] = useState<string>('') ;
   const [deadLine, setDeadLine] = useState<any>(addDays(new Date() , 3))
   const [completed, setCompleted] = useState(false) ;
   const dispatch = useDispatch()
   const body : object = {title , progress , descreption , deadLine , completed }
   const userLoginInfo : userLoginState = useSelector((state: stateType) => state.userLogin )
   const { emitAction } = bindActionCreators(actionCreators  , dispatch )
    

   // reset values 
   const resetValues = ():void=>{
    setTitle("") ; setProgress(0) ; setDeadLine(addDays(new Date() , 3  ) ) ; setCompleted(false) ; setDescreption("") 
   }

 return   <StyledCreateGoalContainer >
<Typography textAlign="center" variant="h3" color={(theme)=>theme.palette.primary.main} >  Add New Goal <i className="bi bi-plus-circle-fill"></i></Typography>
<Stack gap="16px"  width="100%" alignItems="center"  >
<Stack width='70%'  direction="row" gap="32px" >    <TextField   fullWidth label="title" placeholder="Goal Title"  variant="filled"  value={title} onChange={(e)=>{setTitle(e.target.value)}} />
    <TextField variant="filled"  fullWidth type='number'   label='Goal Progress'   value={progress} onChange={(e)=>{ setProgress( parseInt( e.target.value ) )}} />
</Stack>
    <TextField sx={{width : '70%'}}  multiline rows={4} variant="filled" label="Descreption" placeholder='Goal Descreption'    value={descreption} onChange={(e)=>{setDescreption(e.target.value)}}  />
<Stack direction="row" width="70%" justifyContent="space-around" >
    <FormControlLabel label="completed" control={<Checkbox checked={completed} onChange={()=>{setCompleted(!completed)}} /> } ></FormControlLabel>
    <TextField label="Dead line"  variant="filled" type='date' value={deadLine} onChange={(e)=>{setDeadLine(e.target.value)}}  />
</Stack> 
    <Button sx={{width: '70%'}} variant="primary" fullWidth onClick={ ()=>{submitGoal(userLoginInfo.token , body , emitAction ) ; resetValues() }  }  > submit     </Button>
</Stack>
   </StyledCreateGoalContainer>  
}



//--------------------------------- the goal header

export const GoalHeader : React.FC = ()=>{
    return <Stack width="70vw"  gap="10%" justifyContent="space-around" direction="row" alignItems="center" >
    <img  src={goalImageTwo} width="150px" height="150px" />
    <Stack alignItems="center" >
        <Typography variant="h3" color={(theme)=>theme.palette.secondary.light} >Goals</Typography>
        <Typography variant='h5' color={(theme)=>theme.palette.white.light} >Set Your Goals and track your progress each day </Typography>
    </Stack>
    <div  style={{width : '150px'  , height : '150'  , backgroundColor : 'transparent' }} ></div>
    </Stack>
}


export const MapGoals = ({ allGoals } : {allGoals : oneGoalState[]}) : JSX.Element=>{
    return <Stack  alignItems="center" gap="40px" paddingY={5} >
<Stack alignItems="center">
<Typography variant="h4" color={(theme)=>theme.palette.secondary.light} > All Goals  <i className="bi bi-card-checklist m-2 "></i>  </Typography>
<Typography variant="h5" color={(theme)=>theme.palette.white.light} >Return back to read your goals</Typography>
</Stack>
      <Stack alignItems="center" gap={4} >  {
allGoals.length ?  allGoals.map(goal =>{
    return  <OneGoal goal={goal} /> 
}) : <Stack  gap="8px" margin="40px" sx={{boxShadow : '2px 2px 4px black' , border: '1px solid black'}} bgcolor={(theme)=>theme.palette.white.light} width="90vw" padding='40px' alignItems="center" > <Typography textAlign="center"  variant="h3" color={(theme)=>theme.palette.secondary.dark} >  <i className="bi bi-exclamation-triangle-fill"></i> Sorry ! </Typography><Typography textAlign="center" color={(theme)=>theme.palette.secondary.main} >No goals found , Try to set some goals</Typography></Stack>
}</Stack>
</Stack>
}


