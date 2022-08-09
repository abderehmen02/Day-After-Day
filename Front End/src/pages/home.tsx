import React from 'react'
import { Link } from 'react-router-dom'
export const Home: React.FC =  ()=> {
  return (
    <div>
    <div>Home</div>
    <Link to='/login' > login </Link>
    <Link to='/signUp' ></Link>
    </div>
  )
}
