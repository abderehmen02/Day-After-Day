import React from 'react'
import { bindActionCreators } from 'redux'
import './index.css'
import { Link, useNavigate } from 'react-router-dom'
import {login as loginAction} from '../../features/login'
import * as actionCreators from '../../state/actionCreators'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'


export const  Header = (): JSX.Element =>{
    const titleInfoText = "Where you can increase your productivity and acheive your goals faster"
  return (
  <div className="header">
    <div className='homeTitle'  > Welcome To Day After Day <div className='logoHome' ></div> </div>
  </div> 
  
  )
}



// initial={{x : -50 ,y : 50}} animate={{x : 0 , y: 0}} transition={{duration : 0.5}}
export const Buttons = () : JSX.Element =>{
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const {login , emitAction } = bindActionCreators(actionCreators , dispatch)

    const loginGuest = ()=>{
         loginAction({ email  : process.env.REACT_APP_GUEST_USERNAME , password :  process.env.REACT_APP_GUEST_PASSWORD } , login , emitAction , navigate )
    }
    return           <div className="homeButtons"  >
    <button className='homeBtn loginBtn'    ><Link  className='link'  to='/login'  > login <i className="bi bi-box-arrow-in-right"></i> </Link> <br/></button>
    <button className='homeBtn regesterBtn' ><Link  className='link'  to='/regester' > regester <i className="bi bi-person-plus icon"></i></Link></button>
    <button className='homeBtn loginGuestBtn link' onClick={loginGuest} > login as a guest </button>
     <button className='homeBtn aboutHomeBtn' ><Link className='link' to="/about" > about the app <i className="bi bi-journal-text"></i> </Link> </button>
   
    </div>
}