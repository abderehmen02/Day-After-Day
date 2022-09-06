import { productivityActionTypes } from "../../types"
import { createAction, deleteSecureAction } from "../../utils"

export const   submitProd = async (body : {value : number | undefined , date : string | undefined}, token : string | undefined , emitAction : Function  , setErr : Function)=>{
    const {data , error} = await createAction('prod' , body , token )
    if(data){
        emitAction(productivityActionTypes.PRODUCTIVITY_SUCCUSS   , data)       
    }
    else if(error){
        emitAction(productivityActionTypes.PRODUCTIVITY_ERROR , error)
    }
}



export const deleteProd = async (id : string | undefined, token : string | undefined , emitAction : Function , setErr : Function )=>{
    console.log('id')  ; 
    console.log(id)    ; 
    const {data , error} = await deleteSecureAction(`prod/${id}`  , token )
    if(data){
        console.log("data from delete prod") ; 
        console.log(data)  ; 
emitAction(productivityActionTypes.PRODUCTIVITY_SUCCUSS , data)
    }
    else {
        setErr(error)
    }
}