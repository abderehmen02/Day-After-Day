import React from 'react'
import { Skeleton, SkeletonParagrapth } from '../skeleton/skeleton'
import { Skeleton as MuiSkeleton , Box }  from '@mui/material'


export const DisplayOneGoalSkeleton = ()  :JSX.Element =>{
    return    <div className="displayGoalItem" >
      <div className="goalDescreption goalInfoItem" > <SkeletonParagrapth lines={4} /> </div>
      <div className="goalInfoItem">  <Skeleton type='text' /> </div>
      <div className="goalInfoItem completedDisplay" > <Skeleton type='text' /> </div>
 <div className="girdProgress desktop" style={{width : "100%" , height : '100%'}} >       </div> 
    </div>
}


export const OneGoalSkeleton = () : JSX.Element => {
  return <Box>
<Box display={{xs: 'none' , sm: 'block'  }} >         <div className="oneGoal" >
<Skeleton type='title'/>
<div className="oneGoalBody">      
 <DisplayOneGoalSkeleton  />
 <div className='goalButtonsSkeleton' >
 <Skeleton type='article' />
 </div>
</div>   
 </div>  </Box>
 {/* skeleton for mobile view */}
 <MuiSkeleton  variant="rectangular" style={{backgroundColor: 'white' , borderRadius : '4px' , margin : '16px' }} width="90vw" height='30vh' ></MuiSkeleton>
 </Box>
}

export const AllGoalsSkeleton = () : JSX.Element =>{
return <div className="allGoals" >
<div className="title AllGoalsBorder" > All Goals  <i className="bi bi-card-checklist m-2 "></i> </div>
      <div className="mappingAllGoals ">  {
[1,2].map(() =>{
    return  <OneGoalSkeleton  /> 
})
        }</div>
</div>}