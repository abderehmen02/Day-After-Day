import React from 'react'
import './index.css'
import { Skeleton as MuiSkeleton } from '@mui/material'
import { Stack } from '@mui/system'
type type = "title" | "text" | "article"

export const  Skeleton = ({type} : {type : string} ) : JSX.Element =>{
  return (
    <div className={`skeleton ${type}`} >
    </div>
  )
}

export const SkeletonParagrapth = ({lines}  : {lines : number} ) : JSX.Element=>{
    const mapingArr  = new Array()
    for(let i = 0 ; i < lines ; i++){
        mapingArr.push(i)
    }
return <div className='skeletonWraper' >
    {
      mapingArr.map(item =>{
            return <div className='skeleton text' >
                </div>
        })
    }
</div>
}

export const UserLoadingSkeleton : React.FC =  ()=>{
  return <Stack width="100vw" alignItems="center" justifyContent="space-around" >
<MuiSkeleton width="90vw" height='80px'  ></MuiSkeleton>
<MuiSkeleton width='90vw' height='70vh'  ></MuiSkeleton>
  </Stack>
}