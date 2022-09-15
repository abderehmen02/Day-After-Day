import React  , { useEffect , useState }from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { stateType } from '../../state/reducers'
import { eventState  , userLoginState} from '../../types'
import { getEvents } from './functions'
import * as actionCreators from '../../state/actionCreators'
import { Dispatch  , bindActionCreators } from 'redux'
export function MapingEvents(): JSX.Element {

const   event : eventState  = useSelector((state: stateType)=>state.event)
const   dispatch : Dispatch= useDispatch() ; 
const   { emitAction } = bindActionCreators(actionCreators , dispatch)
const    userLogin : userLoginState = useSelector((state :  stateType)=>state.userLogin)



useEffect(() => {
    if(userLogin.token){
        getEvents(userLogin.token , emitAction ) ; 
    }
}, [userLogin])

  return (
    <div>eventss
    </div>
  )
}


export function CreateEvent():JSX.Element{
    const [title, setTitle] = useState<string | undefined >("")        ;
     const [descreption, setDescreption] = useState<string | undefined>("")  ;
     const [date, setDate] = useState<Date | undefined >(new Date())
     return (
  <div>
 <input  value={title} onChange={e=>setTitle(e.target.value)} ></input>
 <input   value={descreption}  onChange={e =>setDescreption(e.target.value) } ></input>
 <input   value={date}    onChange={e=>setDate(e.target.value)} ></input>
 <button></button>
 </div>   
 )
}