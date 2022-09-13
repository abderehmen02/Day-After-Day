import React  from 'react'
import { Link } from 'react-router-dom'
import '../features/home/index.css'
import { Buttons, Header } from '../features/home/conmponents'
import homeImgOne from '../assets/images/goal6.png'
import homeImgTwo from  '../assets/images/goal11.png'
import * as actionCreators from '../state/actionCreators'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

export const Home: React.FC =  ()=> {
   
  return (
    <div className='homePage' >
      <Header/>
      <div className="homeBody">
     <img src={homeImgTwo} ></img>
     <Buttons/>
     <img src={homeImgOne} ></img>
    </div>
    </div>
  )
}
