import React , { useState  , useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {motion} from 'framer-motion';
import { stateType } from '../state/reducers'
import {getGoals, AllGoalsSkeleton } from  '../features/goals'
import { goalActionTypes, goalState, oneGoalState , userLoginState } from '../types'
import {bindActionCreators} from "redux"
import {CreateGoal, GoalHeader, GoalImageLine, MapGoals, OneGoal  } from '../features/goals/components'
import LoggedNav from "../components/loggedNav"
import * as ActionCreators from '../state/actionCreators'
import LogOut from '../components/logOut'
import NavBar from '../components/loggedNav'
import "../features/goals/index.css"
import { Box , styled , Stack } from '@mui/material';

const GoalPageContainer = styled(Stack)(({theme})=>({
backgroundColor : theme.palette.primary.main ,
alignItems: 'center' ,
gap : '40px' ,
}))

function Goal() {

   const state = useSelector((state : stateType)=> state)
   const dispatch = useDispatch()
   const userLoginInfo : userLoginState = useSelector((state: stateType) => state.userLogin )
   const userGoalsInfo : goalState = useSelector((state : stateType) =>state.goals)
   const { emitAction } = bindActionCreators(ActionCreators  , dispatch )


// getting all the goals when the page rendres
useEffect(() => {
getGoals( userLoginInfo.token , emitAction ) 
}
, [])


   return (
    <GoalPageContainer  >
      <LoggedNav />     
            <GoalHeader/>

      <CreateGoal/>
    <GoalImageLine/>

{ userGoalsInfo.loading ?   <AllGoalsSkeleton/> : <MapGoals allGoals={userGoalsInfo.data.allGoals} /> }
      </GoalPageContainer>
   )}

export default Goal