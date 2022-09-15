import React  , { useEffect }from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { stateType } from '../../state/reducers'
import { eventState  , userLoginState} from '../../types'
import { getEvents } from './functions'
import * as actionCreators from '../../state/actionCreators'
import { Dispatch  , bindActionCreators } from 'redux'
export function MapingEvents() {

const   event : eventState  = useSelector((state: stateType)=>state.event)
const   dispatch : Dispatch= useDispatch() ; 
const   { emitAction } = bindActionCreators(actionCreators , dispatch)
const    userLogin : userLoginState = useSelector((state :  stateType)=>state.userLogin)
console.log("event") ; 
console.log(event)
useEffect(() => {
    if(userLogin.token){
        getEvents(userLogin.token , emitAction ) ; 
    }
}, [userLogin])

  return (
    <div>eventss</div>
  )
}

