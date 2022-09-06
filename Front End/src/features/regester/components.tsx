import React from 'react'
import { Link } from 'react-router-dom'

export const Header  = () => {
  return (
<div className='regesterHeader ' >
    <h2> Regester </h2>
    <h6>if you already have an please <Link to="/login" >login</Link></h6> 
</div>
    )
}