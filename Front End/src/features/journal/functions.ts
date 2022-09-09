import { createAction } from "../../utils"



const path = "journaling"
export const submitJornal = async(body : {title : string | undefined , content : string | undefined, date : string |undefined } , token : string | undefined, emitAction : Function )  : Promise<void>=>{
    console.log(body)  ;
    console.log(token)  ;
const {data , error } = await createAction(path , body , token )
if(data){
    console.log(data)
}
else console.log(error)
}