import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import LogOut from './logOut'
function NavBar() {
  return <div className="nav bg-primary">
  <h4> Day After Day </h4>
  <div className='list' >
    <div>
      <LogOut/>
    </div>
    <div className='item'>
      <Link to="/productivity" className='link'> Productivity </Link>
    </div>
    <div className='item'>
      <Link to="/goal"  className='link' > Goals </Link>
    </div>
    <div className='item'>
      <Link to="/about"   className='link' > About </Link>
    </div>
  </div>
  </div>
}

export default NavBar