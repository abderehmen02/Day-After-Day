import { Action, productivityAction, productivityActionTypes } from "../../types";
import { Dispatch}from 'redux'
import { allActionTypes } from "../../types";
export const emitAction  = ( actionType : any , payload? : any  ) : any =>{
    return ( (dispatch : Dispatch<Action> )=>{
 console.log("action emmited")
 console.log(payload)
        if(payload){
dispatch({type : actionType , 
        payload : payload
        })
           } 
        
        else  { dispatch( { type :  actionType } ) } 
        } )
    }