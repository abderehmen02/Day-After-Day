import { journalActions } from "../../types"
import { createAction, deleteSecureAction, getPublicAction, getSecureAction, putSecureAction } from "../../utils"



const path :string= "journaling"
// ------------------------------------ creating journal ---------------------
export const submitJornal = async(body : {title : string | undefined , content : string | undefined, date : string |undefined } , token : string | undefined, emitAction : Function   )  : Promise<void>=>{
emitAction(journalActions.JOURNAL_REQUEST)
const {data , error } = await createAction(path  , body , token )
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
  setTimeout(()=>{
 emitAction(journalActions.JOURNAL_SUCCUSS , data)    }, 5000 )
}
else if(error){
    console.log("error")
    console.log(error)
emitAction(journalActions.JOURNAL_ERROR , error)
}
}




//----------------------------------------------------- edit journal -------------------------




export const submitEditJournal = async (body : {title? : string | undefined , content?  : string | undefined} , token : string | undefined , emitAction : Function , journalId : string  )   : Promise<void>=>{
emitAction(journalActions.JOURNAL_REQUEST)
const {data , error} = await putSecureAction(path + '/' + journalId , body , token ) ; 
if(data){
    emitAction(journalActions.JOURNAL_SUCCUSS , data )
}
else if(error){
    emitAction(journalActions.JOURNAL_ERROR , error)
}
}




// ------------------------------------- delete journal --------------------------------------------------------------------

export const deleteJournal = async (token : string | undefined , emitAction : Function , journalId : string )=>{
    console.log("delete")
    emitAction(journalActions.JOURNAL_REQUEST)
    const {data , error} = await deleteSecureAction(path + '/' +  journalId , token   ) ; 
     if(data){
        console.log("data from delete")
        console.log(data)
        emitAction(journalActions.JOURNAL_SUCCUSS , data)
     }   
     else if(error){
        emitAction(journalActions.JOURNAL_ERROR , error)
     }
}