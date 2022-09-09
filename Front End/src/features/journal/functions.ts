import { journalActions } from "../../types"
import { createAction, getPublicAction, getSecureAction } from "../../utils"



const path = "journaling"
// ------------------------------------ creating journal ---------------------
export const submitJornal = async(body : {title : string | undefined , content : string | undefined, date : string |undefined } , token : string | undefined, emitAction : Function )  : Promise<void>=>{
emitAction(journalActions.JOURNAL_REQUEST)
const {data , error } = await createAction(path , body , token )
if(data){
    emitAction( journalActions.JOURNAL_SUCCUSS , data )
}
else if(error){
    emitAction(journalActions.JOURNAL_ERROR , error)    
}
}



//---------------------------------------getting journal-------------------------


export const  getJournals = async (token : string | undefined , emitAction : Function) : Promise<void>=>{
emitAction(journalActions.JOURNAL_REQUEST) ; 
const {data , error} = await getSecureAction(path , token) ; 
if(data){
emitAction(journalActions.JOURNAL_SUCCUSS , data)    
}
else if(error){
emitAction(journalActions.JOURNAL_ERROR , error)
}
}