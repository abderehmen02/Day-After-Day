import React , { useState  , useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'

import { stateType } from '../state/reducers'
import {getGoals, } from  '../features/goals'
import { goalState, oneGoalState , userLoginState } from '../types'
import {bindActionCreators} from "redux"
import {GoalImageLine, MapGoals, OneGoal} from '../features/goals/components'
import * as ActionCreators from '../state/actionCreators'
import LogOut from '../components/logOut'
import NavBar from '../components/loggedNav'
import "../features/goals/index.css"
import { Header } from '../features/goals/components'



function Goal() {

   const state = useSelector((state : stateType)=> state)
   console.log("state from goal")
   console.log(state)
   const dispatch = useDispatch()
   const userLoginInfo : userLoginState = useSelector((state: stateType) => state.userLogin )
   const userGoalsInfo : goalState = useSelector((state : stateType) =>state.goals)
   const { emitAction } = bindActionCreators(ActionCreators  , dispatch )


// getting all the goals when the page rendres
useEffect(() => {
    userLoginInfo.token &&   getGoals( userLoginInfo.token , emitAction )
}
, [])
console.log(userGoalsInfo)
console.log("goals info")

    if(userGoalsInfo.loading){
      return <h1>getting goals</h1>
    }

   return (
    <div className='goalPage staticPage' >       

    <Header/>
    <GoalImageLine/>
<MapGoals allGoals={userGoalsInfo.data.allGoals} />
    <LogOut/> 
      </div>
   )}

export default Goal