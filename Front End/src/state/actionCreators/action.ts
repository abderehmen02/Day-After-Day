import { Action, productivityAction } from "../../types";

export const emitAction  = ( actionType : string , payload : object | undefined ) : any =>{
    return (dispatch : Dispatch<Action> )=>{
        if(!payload){
dispatch( { type :  actionType } ) ,
           } 
        
        else dispatch({type : actionType , 
        payload : payload
        })
        }

    }