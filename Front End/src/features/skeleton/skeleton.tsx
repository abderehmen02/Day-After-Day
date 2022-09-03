import React from 'react'
import './index.css'
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

