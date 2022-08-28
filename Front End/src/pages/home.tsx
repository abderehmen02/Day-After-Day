import React from 'react'
import { Link } from 'react-router-dom'
import{motion} from 'framer-motion'
import '../features/home/index.css'
export const Home: React.FC =  ()=> {
  return (
    <div className='homePage' >
      <div className="header">
    <div className='homeTitle' > Welcome To Day After Day <div className='logoHome' ></div> </div>
    <div className='titleInfo' > Where you can increase your productivity and acheive your goals faster </div>
    </div>
    <div className="buttons">
    <button className='btn btn-secondary text-info m-4'><Link to='/login' > login </Link> <br/></button>
    <button className='btn btn-primary m-4 text-secondry' > <Link to='/regester' > regester</Link></button>
    </div>
    </div>
  )
}
