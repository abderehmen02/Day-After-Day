import { eventActions } from "../../types"
import { createAction, getSecureAction } from "../../utils"

const path : string = 'event'

export const getEvents : Function = async (token : string , emitAction : Function) : Promise<void>=>{
    emitAction(eventActions.EVENT_REQUEST)
    const {data , error} = await getSecureAction(path , token )
    if(data){
emitAction(eventActions.EVENT_SUCCUSS , data)
    }
    else if(error){
emitAction(eventActions.EVENT_ERROR , error)
    }
}

export const creatEvent = async (body : {title  : string | undefined , descreption : string | undefined , date : string | undefined } , token : string   | undefined , emitAction : Function  ) : Promise<void>=>{
 emitAction(eventActions.EVENT_REQUEST)
 const {data , error  } = await createAction(path , body , token)   
 if(data){ 
 
    emitAction( eventActions.EVENT_SUCCUSS , body  )
}
else if(error){
    emitAction(eventActions.EVENT_ERROR , error)
}  
} 