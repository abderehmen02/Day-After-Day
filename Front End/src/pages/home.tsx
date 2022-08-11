import React from 'react'
import { Link } from 'react-router-dom'
export const Home: React.FC =  ()=> {
  return (
    <div>
    <div>Home</div>
    <Link to='/login' > login </Link> <br/>
    <Link to='/regester' > regester</Link>
    </div>
  )
}
