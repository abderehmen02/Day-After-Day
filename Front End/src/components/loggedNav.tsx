import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import LogOut from './logOut'
function NavBar() {
  const [DisplayList, setDisplayList] = useState(false)
  return ( <div className="nav bg-primary">
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
    <div className='item moreBtn' >
{  DisplayList ||     <button onClick={()=>{setDisplayList(true)}} > more</button> }
      {
        DisplayList && <div className='list' >
          <div > <Link to="/about" className='link' > About </Link> </div>
          <div> <Link  to="/journal"  className='link' > Journal </Link> </div>
          </div>
      }
      </div>
    </div>
  </div> )
  
}

export default NavBar