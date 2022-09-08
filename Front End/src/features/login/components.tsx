import React , {useEffect }from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { userLoginState } from '../../types'
import { stateType } from '../../state/reducers'
export const Header =  ():JSX.Element=> {
  return (
    <div className='loginHeader' >
        <h2> Login </h2>
        <h6>if you dont't have an account yet you can <Link to="/regester" >regester</Link></h6>
    </div>
  )
}


export const ErrorSection = (): JSX.Element=>{
const loginInfo : userLoginState = useSelector( (state : stateType ) => state.userLogin )
console.log("login info")

console.log(loginInfo)
// effects
  return (<div className='errorSection' style={{visibility : loginInfo.error? 'visible' : 'hidden'}} >
{loginInfo.error || ''}
    </div>
  )
}