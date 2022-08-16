import React from 'react'
import {useSelector} from 'react-redux'
import { stateType } from '../state/reducers'

export const Productivity:React.FC  = ()=> {
  const productivityInfo = useSelector((state  : stateType )=> state.productivity)
  console.log(productivityInfo)
  console.log("productivity info");
  
  return (
<div>
  <input placeholder='your productivity' ></input>
</div>
    )
}

