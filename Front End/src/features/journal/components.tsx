import React , { useEffect, useState} from 'react'
import { useSelector  , useDispatch } from 'react-redux';
import { AnyAction, Dispatch , bindActionCreators } from 'redux';
import { stateType } from '../../state/reducers';
import { getJournals, submitEditJournal, submitJornal } from './functions';
import * as actionCreators from '../../state/actionCreators'
import { journalActions, JournalState, oneJournalState, userLoginState } from '../../types';

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








// ---------------------------------------------------- display one journal -------------------
const DisplayJournal = ({journal}  : {journal: oneJournalState}) : JSX.Element =>{
return <div>
  <h4>{journal.title}</h4>
  <p>{journal.content}</p>
</div>
} 








//--------------------------------------------------------------------------------------------------------------------------------------------------------- edit journal

const EditJournal = ({journal}  : {journal : oneJournalState }) : JSX.Element =>{
  const [title, setTitle] = useState<string | undefined >(journal.title)       ; 
  const [content, setContent] = useState<string | undefined >(journal.content)  ;
  const [body, setBody] = useState<{title? : string | undefined , content? : string | undefined}>({}) ; 
  const ableSubmit = title !== journal.title || content !== journal.content ;
  const userLogin = useSelector((state : stateType)=>state.userLogin)
  const dispatch : Dispatch = useDispatch()
  const {emitAction}   = bindActionCreators( actionCreators , dispatch)
  useEffect(() => {
  if(content !== journal.content){setBody((prevBody)=>{return {...prevBody , content }})}
  if(title !== journal.title){ setBody((prevBody)=>{return {...prevBody , title  }}) } ;    
  }, [title , content])
   

return <div>
<input value={title}       type="text"       onChange={e =>{setTitle(e.target.value)}}      ></input>
<input value={content}    type="text"       onChange={e =>{setContent(e.target.value)}}    ></input>
{ ableSubmit ?  <button onClick={()=>{submitEditJournal(body , userLogin.token , emitAction , journal._id )}} > submit changes </button> : 'change some value before submiting'}
</div>
}




//------------------------------------------------------ -------------------------------------------------------------------------------------------------------- one journal 
const OneJornalComponent = ({journal} : {journal : oneJournalState}) : JSX.Element =>{ 
const [editJournalComponent, setEditJournalComponent] = useState<boolean>(false)
return <div>
   {editJournalComponent ? <EditJournal journal={journal} />  : <DisplayJournal journal={journal} />}
   <button onClick={()=>{setEditJournalComponent(value => !value)}} > {editJournalComponent ? 'display' : 'edit'}</button> 
   <button> delete </button>
   </div>
}





// ------------------------------------------------------ ----------------------------------------------- ---------------------------------------------------------------- journal skeleton
const JournalsSkeleton = () : JSX.Element=>{
  return <div>
<h4> loading </h4>
  </div>
}







//------------------------------------------------------- maping journals ----------------------------------------------------------------------------
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
return  <OneJornalComponent journal={journal} />
})}
</div> 
}