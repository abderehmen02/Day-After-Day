import { productivityActionTypes } from "../../types"
import { createAction } from "../../utils"

export const   submitProd = async (value : number | undefined, token : string | undefined , emitAction : Function  , setErr : Function)=>{
    const {data , error} = await createAction('prod' , {value} , token )
    if(data.succuss){
        emitAction(productivityActionTypes.PRODUCTIVITY_SUCCUSS   , data)       
        console.log(data)
    }
    console.log(error)
}