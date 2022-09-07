import React , { useState  , useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
 
import { stateType } from '../state/reducers'
import {getGoals, AllGoalsSkeleton } from  '../features/goals'
import { goalState, oneGoalState , userLoginState } from '../types'
import {bindActionCreators} from "redux"
import {GoalImageLine, MapGoals, OneGoal  } from '../features/goals/components'

import * as ActionCreators from '../state/actionCreators'
import LogOut from '../components/logOut'
import NavBar from '../components/loggedNav'
import "../features/goals/index.css"
import { Header } from '../features/goals/components'



function Goal() {

   const state = useSelector((state : stateType)=> state)
   const dispatch = useDispatch()
   const userLoginInfo : userLoginState = useSelector((state: stateType) => state.userLogin )
   const userGoalsInfo : goalState = useSelector((state : stateType) =>state.goals)
   const { emitAction } = bindActionCreators(ActionCreators  , dispatch )
console.log(state)

// getting all the goals when the page rendres
useEffect(() => {
    userLoginInfo.token &&   getGoals( userLoginInfo.token , emitAction )
   
}
, [])


   return (
    <div className='goalPage staticPage' >       
    <Header/>
    <GoalImageLine/>

{ userGoalsInfo.loading ?   <AllGoalsSkeleton/> : <MapGoals allGoals={userGoalsInfo.data.allGoals} /> }
    <LogOut/> 
      </div>
   )}

export default Goal