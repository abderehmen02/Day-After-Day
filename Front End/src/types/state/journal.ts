export interface oneJournalState {
    title: string , 
    content : string , 
    date : string ,
    user : string , 
    _id  : string , 
}

export interface JournalState {
data? : {allJournals : oneJournalState[]  },
loading : boolean,
error? :any
}


export enum journalActions {
JOURNAL_REQUEST = 'JOURNAL_REQUEST',
JOURNAL_SUCCUSS = 'JOURNAL_SUCCUSS' ,
JOURNAL_ERROR =  'JOURNAL_ERROR' ,
JOURNAL_RESET = 'JOURNAL_RESET'
} 

export  interface JournalRequestAction {
type : journalActions.JOURNAL_REQUEST , 
}

export interface JournalSuccussAction {
    type : journalActions.JOURNAL_SUCCUSS , 
    payload : oneJournalState[]
}
export interface JournalErrorAction {
    type : journalActions.JOURNAL_ERROR ,
    payload : any 
 }

 
export interface JournalResetAction {
    type : journalActions.JOURNAL_RESET ,
}


export type JournalActionType = JournalErrorAction | JournalSuccussAction | JournalRequestAction | JournalResetAction