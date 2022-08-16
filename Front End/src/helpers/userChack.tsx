import React, { Component } from 'react' ; 
import{useSelector} from 'react-redux' ; 
import { stateType } from '../state/reducers';
import { useNavigate } from 'react-router-dom'; 
import { userInfoState , userLoginState } from '../types';
export const IsLoggedIn = ({children }  : any)    => {
    const userInfo : userInfoState  = useSelector( ( state : stateType )=> state.userInfo) ; 
    const navigate = useNavigate()
    const userLogin : userLoginState  = useSelector((state : stateType) => state.userLogin) ; 
    const storageUser : string|null = localStorage.getItem("day-after-day") ;

  if( userLogin.loading === true  ) return <div> loading ... </div>

  if(!userInfo && !Object.keys(userLogin).length && !storageUser){
    navigate("/")
    return <div>this is for typescript</div>
  }

  else if( userInfo && Object.keys(userLogin).length && storageUser  )  return (
     <div>{ children }</div>
  )
   return <div> there is an error in the pages  </div>
}

export const IsLoggedOut = ({children}  : any) =>{
    const userInfo : userInfoState  = useSelector( ( state : stateType )=> state.userInfo) ; 
    const navigate = useNavigate()
    const userLogin  : userLoginState = useSelector((state : stateType) => state.userLogin) ; 
    const storageUser : string | null = localStorage.getItem("day-after-day") ;

    if( userInfo && Object.keys(userLogin).length  && storageUser){
        navigate("/productivity")
        return <div></div>
    }
    else if(!userInfo && !Object.keys(userLogin).length && !storageUser){
        return <div>{children}</div>
    }
    return <div> some error happened in the pages </div>
}