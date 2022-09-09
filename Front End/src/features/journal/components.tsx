import React , {useEffect, useState} from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { stateType } from '../../state/reducers';
import { getJournals, submitJornal } from './functions';
import * as actionCreators from '../../state/actionCreators'
import { JournalState, oneJournalState, userLoginState } from '../../types';

export const  CreateJournal = ({date} : {date : Date}) : JSX.Element=> {
    const [title, setTitle] = useState<string | undefined >("") ;
    const [content, setContent] = useState<string  | undefined>("") ;
    const userLogin : userLoginState = useSelector((state : stateType )=>state.userLogin ) ;
    const dispatch   = useDispatch()  ; 
    const {emitAction} = bindActionCreators( actionCreators , dispatch )  ; 
    const body = {
      title , content , date : date.toISOString()
    }
   return (
    <div>
    <div>CreateJournal</div>
    <input value={title}      onChange={(e)=>{setTitle(e.target.value)}} ></input>
    <input value={content}    onChange={(e)=>{setContent(e.target.value)}} ></input>
    <button onClick={()=>{submitJornal(body ,userLogin.token , emitAction)  }} > submit journal</button>
    </div>
  )
}




//------------------------------------------------------ one journal -------------
const OneJornal = ({journal} : {journal : oneJournalState}) : JSX.Element =>{
  return <div>
    <h3>{journal.title}</h3>
    <p>{journal.content}</p>
  </div>
}





// ------------------------------------------------------ journal skeleton ---------------------
const JournalsSkeleton = ()=>{
  return <div>
<h4> loading </h4>
  </div>
}




export const JournalsMap = () : JSX.Element =>{ 
   const dispatch = useDispatch() ; 
   const userLogin : userLoginState = useSelector((state : stateType)=>state.userLogin)
   const journal : JournalState = useSelector((state : stateType)=>state.journal)
   const {emitAction} = bindActionCreators(actionCreators , dispatch)
 
   useEffect(()=>{
   getJournals( userLogin.token , emitAction )
   } , [])

return <div>
<h2>all journals</h2>
{ journal.loading ? <JournalsSkeleton/> :  journal.data?.allJournals.map((journal :oneJournalState)=>{
return  <OneJornal journal={journal} />
})}
</div> 
}