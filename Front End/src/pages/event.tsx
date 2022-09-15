import React from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { stateType } from '../state/reducers'


function Event() {
  const state : stateType = useSelector((state: stateType)=>state )
  console.log(state)
  return (
    <div>THIS IS THE EVENT PAGE</div>
  )
}

export default Event