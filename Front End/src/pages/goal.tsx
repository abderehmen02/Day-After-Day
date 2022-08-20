import React , { useState } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {addDays} from 'date-fns'
import { stateType } from '../state/reducers'
function Goal() {
   const state = useSelector((state : stateType)=> state)
   const [titel, setTitel] = useState<string >("")   ;
   const [progress, setProgress] = useState<number>(0)  ;
   const [descreption, setDescreption] = useState<string>('') ;
   const [deadLine, setDeadLine] = useState(addDays(new Date() , 3))
   const [completed, setCompleted] = useState(false)
   const body = {titel , progress , descreption , deadLine , completed }
  return (
    <div>
        <h1>goals</h1>
        <input type="text" placeholder='titel'         value={titel} onChange={(e)=>{setTitel(e.target.value)}} />
        <input type="number"  placeholder='progress'   value={progress} onChange={(e)=>{ setProgress( parseInt( e.target.value ) )}} ></input> 
        <input type="text" placeholder='descretion'    value={descreption} onChange={(e)=>{setDescreption(e.target.value)}}></input>
        <input type='checkbox' checked={completed} onChange={()=>{setCompleted(!completed)}}></input>
      <label> dead line </label>  <input type='date'  ></input>
    </div>
  )
}

export default Goal