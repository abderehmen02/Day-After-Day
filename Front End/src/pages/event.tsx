import React from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { CreateEvent, MapingEvents } from '../features/events/components'
import { stateType } from '../state/reducers'


function Event() {
  const state : stateType = useSelector((state: stateType)=>state )

  return (
    <div>THIS IS THE EVENT PAGE
<MapingEvents/>
<CreateEvent/>
    </div>
    
  )
}

export default Event