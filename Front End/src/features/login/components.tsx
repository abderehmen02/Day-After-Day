import React from 'react'
import { Link } from 'react-router-dom'

export const Header =  ()=> {
  return (
    <div className='loginHeader' >
        <h2> Login </h2>
        <h6>if you dont't have an account yet you can <Link to="/regester" >regester</Link></h6>
    </div>
  )
}
