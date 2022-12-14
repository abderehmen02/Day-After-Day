import React , { useEffect, useState} from 'react'
import { useSelector  , useDispatch } from 'react-redux';
import { AnyAction, Dispatch , bindActionCreators } from 'redux';
import { stateType } from '../../state/reducers';
import { deleteJournal, getJournals, submitEditJournal, submitJornal } from './functions';
import * as actionCreators from '../../state/actionCreators'
import { journalActions, JournalState, oneJournalState, userLoginState } from '../../types';
import journalImageOne   from    '../../assets/images/journal5.png'
import journalImageTwo   from    '../../assets/images/journal6.png'
import { Skeleton } from '../skeleton/skeleton';


// ------------------------------------------------------------------------------- --------------journal header

export const JournalHeader = () : JSX.Element =>{
  return <div className='journalHeader' >
<img src={journalImageOne} />
<div className="journalInnerHeader">
  <h4 className="journalTitle">
    journaling
  </h4>
  <p className="journalSubTitle">
    write every idea that comes into your mind
  </p>
</div>
  <img src={journalImageTwo} ></img>
  </div>
}


//---------------------------------------------------------------------------------------------  journal skeleton
const DisplayJournalSkeleton = () : JSX.Element =>{
return <div className='displayJournalComponent' >
  <h4 className='journalTitleSkeleton'><Skeleton type='title'/> <Skeleton type="title" /> </h4>
  <p  className='journalParagraphSkeleton' > <Skeleton type='paragraph' /> </p>
</div>
}




export const OneJournalSkeleton = (): JSX.Element=>{
  return<div  className='oneJournalComponent'>  <DisplayJournalSkeleton  />
   <div className="oneJournalButtons">
   <button className='display' >  <span> edit <i className="bi bi-pencil icon"></i></span></button> 
   <button className='delete' > delete <i className="bi bi-trash icon"></i> </button>
   </div>
   </div> 
}



// -------------------------------------------------------------------------------------------- create journal component



export const  CreateJournal = ({date} : {date : Date}) : JSX.Element=> {
    const [title, setTitle] = useState<string | undefined >("") ;
    const [content, setContent] = useState<string  | undefined>("") ;
    const userLogin : userLoginState = useSelector((state : stateType )=>state.userLogin ) ;
    const dispatch   = useDispatch()  ; 
    const {emitAction} = bindActionCreators( actionCreators , dispatch )  ; 
    const body = {
      title , content , date : date.toISOString()
    }
    const resetValues  = ():void=>{
setTitle("") ;
setContent("") ; 

    }
   return (
    <div className='createJournalComponent' >
    <div className='createJournalTitle' >Create Journal <i className="bi bi-plus-circle-fill icon "></i> </div>
    <div className="createJournalForm">
    <input value={title}      onChange={(e)=>{setTitle(e.target.value)}} ></input>
    <input value={content}    onChange={(e)=>{setContent(e.target.value)}} ></input>
    <button onClick={()=>{submitJornal(body ,userLogin.token , emitAction) ; resetValues() }} > Submit Journal <i className="bi bi-folder-plus icon"></i></button>
    </div>
    </div>
  )
}








// ---------------------------------------------------- display one journal -------------------
const DisplayJournal = ({journal}  : {journal: oneJournalState}) : JSX.Element =>{
return <div className='displayJournalComponent' >
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
const userLogin = useSelector((state : stateType)=>state.userLogin)
const dispatch : Dispatch = useDispatch()
const {emitAction}   = bindActionCreators( actionCreators , dispatch)
 


return <div  className='oneJournalComponent' >
    {editJournalComponent ? <EditJournal journal={journal} />  : <DisplayJournal journal={journal} />}
   <div className="oneJournalButtons">
   <button className='display' onClick={()=>{setEditJournalComponent(value => !value)}} > {editJournalComponent ? <span>display <i className="bi bi-card-list icon"></i> </span> : <span> edit <i className="bi bi-pencil icon"></i></span>}</button> 
   <button className='delete' onClick={()=>{deleteJournal(userLogin.token , emitAction , journal._id )}} > delete <i className="bi bi-trash icon"></i> </button>
   </div>
   </div>
}





// ------------------------------------------------------ ----------------------------------------------- ---------------------------------------------------------------- journal skeleton
const JournalsSkeleton = () : JSX.Element=>{
  return <div className='mapingJournalComponent' >
<h2>all journals</h2>
{   [1,2,3,4].map(()=>{
return  <OneJournalSkeleton />
})}
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

return <div className='mapingJournalComponent' >
<h2>all journals</h2>
{ journal.loading ? <JournalsSkeleton/> :  journal.data?.allJournals.map((journal :oneJournalState)=>{
return  <OneJornalComponent journal={journal} />
})}
</div> 
}