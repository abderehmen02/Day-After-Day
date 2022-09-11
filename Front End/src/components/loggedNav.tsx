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
    <div className='item hoverEfect'>
      <Link to="/productivity" className='link'> Productivity </Link>
    </div>
    <div className='item hoverEfect'>
      <Link to="/goal "  className='link' > Goals </Link>
    </div>
    <div className='item moreBtn' >
{  DisplayList ?  <i className="bi bi-x-circle closeIcon icon" onClick={()=>{setDisplayList(false)}} ></i> :   <i className="bi bi-three-dots icon"   onClick={()=>{setDisplayList(true)}}></i>    }
      {
        DisplayList && <div className='list' >
          <div className='listItemMoreNav hoverEfect' > <Link to="/about" className='link' > About </Link> </div>
          <div  className='listItemMoreNav hoverEfect ' > <Link  to="/journal"  className='link' > Journal </Link> </div>
          </div>
      }
      </div>
    </div>
  </div> )
  
}

export default NavBar