import { journalActions, JournalActionType, JournalState } from "../../types";

const inintialJournalState : JournalState = {
data : {allJournals : []} ,
loading  : false , 
} ; 


export const journalReducer  = (state : JournalState  = inintialJournalState, action : JournalActionType) : JournalState=>{
    switch(action.type){
        case (journalActions.JOURNAL_REQUEST) : {
            return { 
    loading : true         
            }
        }
        case (journalActions.JOURNAL_SUCCUSS ) : {
            return {
                loading : false , 
                data : {
                    allJournals : action.payload
                }
            }
        }

        case (journalActions.JOURNAL_ERROR)  : {
            return {
loading : false , 
error : action.payload
            }
        }
        case (journalActions.JOURNAL_RESET) : {
            return {
                loading : false 
            }
        }
        default  : {
            return inintialJournalState
        }
    }
}