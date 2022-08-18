import { productivityActionTypes } from "../../types"
import { createAction, deleteSecureAction } from "../../utils"

export const   submitProd = async (value : number | undefined, token : string | undefined , emitAction : Function  , setErr : Function)=>{
    const {data , error} = await createAction('prod' , {value} , token )
    if(data){
        emitAction(productivityActionTypes.PRODUCTIVITY_SUCCUSS   , data)       
        emitAction(productivityActionTypes.PRODUCTIVITY_ERROR , data)
    }
}



export const deleteProd = async (id : string | undefined, token : string | undefined , emitAction : Function , setErr : Function )=>{
    const {data , error} = await deleteSecureAction(`prod/${id}`  , token )
    if(data){
console.log(data)
    }
    else {
        setErr(error)
    }
}