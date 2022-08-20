import { productivityActionTypes } from "../../types"
import { createAction, deleteSecureAction } from "../../utils"

export const   submitProd = async (value : number | undefined, token : string | undefined , emitAction : Function  , setErr : Function)=>{
    const {data , error} = await createAction('prod' , {value} , token )
    console.log("data from submit prod")
    console.log(data)
    if(data){
        emitAction(productivityActionTypes.PRODUCTIVITY_SUCCUSS   , data)       
    }
    else if(error){
        emitAction(productivityActionTypes.PRODUCTIVITY_ERROR , error)
    }
}



export const deleteProd = async (id : string | undefined, token : string | undefined , emitAction : Function , setErr : Function )=>{
    console.log("delete prod")
    const {data , error} = await deleteSecureAction(`prod/${id}`  , token )
    if(data){
        console.log(data)
        console.log('data emited')
emitAction(productivityActionTypes.PRODUCTIVITY_SUCCUSS , data)
    }
    else {
        setErr(error)
    }
}