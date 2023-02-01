import React , { useEffect, useRef, useState} from 'react'
import { useSelector  , useDispatch } from 'react-redux';
import { AnyAction, Dispatch , bindActionCreators } from 'redux';
import { stateType } from '../../state/reducers';
import { deleteJournal, getJournals, submitEditJournal, submitJornal } from './functions';
import * as actionCreators from '../../state/actionCreators'
import { journalActions, JournalState, oneJournalState, userLoginState } from '../../types';
import journalImageOne   from    '../../assets/images/journal5.png'
import journalImageTwo   from    '../../assets/images/journal6.png'
import { Skeleton } from '../skeleton/skeleton';
import { Button, TextField, Typography } from '@mui/material';
import { Stack , Box  , styled } from '@mui/system';


// ------------------------------------------------------------------------------- --------------journal header

export const JournalHeader = () : JSX.Element =>{
  const JournalHeaderContainer= styled(Box)(({theme})=>({
  display : 'flex' ,
  alignItems : 'center' ,
  justifyContent: 'center' ,
  margin :'40px' ,
  [theme.breakpoints.down("sm")] : {
    flexDirection : 'column-reverse' , 
    gap : '32px'
  }
  }))
  return <JournalHeaderContainer >
<img src={journalImageOne} />
<Stack gap="32px" width="340px" >
  <Typography textAlign="center" variant='h3' color={(theme)=>theme.palette.secondary.light} >Journals</Typography>
  <Typography textAlign="center" variant='h5' color={(theme)=>theme.palette.white.main} >write down  the important events that happened in your day</Typography>
</Stack>
<Box display={{xs: "none" , sm  :'block' }} ><img src={journalImageTwo} ></img></Box>
  </JournalHeaderContainer>
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
    const titleInput : any = useRef(null)
    const contentInput : any = useRef(null)
    const userLogin : userLoginState = useSelector((state : stateType )=>state.userLogin ) ;
    const dispatch   = useDispatch()  ; 
    const {emitAction} = bindActionCreators( actionCreators , dispatch )  ; 

    const CreateJournalContainer = styled(Stack)(({theme})=>({
  display: 'flex' ,
  alignItems: 'center' , 
  backgroundColor : 'white' ,
  borderRadius : '8px' ,
  padding : '40px' ,
  gap :'40px' ,
  width : '50%' ,
  margin : '40px' ,
  border: '2px solid black' ,
  boxShadow : '2px 2px 4px black' , 
  [theme.breakpoints.down('sm')] : {
width: '95%'
  }
    }))
   return (
    <CreateJournalContainer>
    <Typography variant="h3" color="primary" >Create Journal <i className="bi bi-plus-circle-fill icon "></i> </Typography>
    <TextField inputRef={titleInput}  variant="filled" placeholder="Your title" fullWidth    ></TextField>
    <TextField  inputRef={contentInput} variant="filled" rows={4} fullWidth placeholder="Your text"  multiline   ></TextField>
    <Button variant='primary' fullWidth onClick={()=>{
      submitJornal({
      title : titleInput.current.value , content : contentInput.current.value, date : date.toISOString()
    } ,userLogin.token , emitAction)  }} > Submit Journal <i className="bi bi-folder-plus icon"></i></Button>
    </CreateJournalContainer>
  )
}








// ---------------------------------------------------- display one journal -------------------
const DisplayJournal = ({journal}  : {journal: oneJournalState}) : JSX.Element =>{
return <Stack  width={{sm : '65%' , xs: '90%'}} gap="16px"  minHeight='200px' justifyContent='space-around' >
  <Typography  textTransform="capitalize" fontWeight="bold" textAlign="center" variant="h4">{journal.title}</Typography>
  <Typography  textAlign="center"  >{journal.content}</Typography>
</Stack>
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
   

return <Stack gap={2}  width="68%" padding={1} >
<TextField value={title}     variant="filled" placeholder="Your title" fullWidth       onChange={e =>{setTitle(e.target.value)}}      ></TextField>
<TextField value={content}    variant="filled" placeholder="Your Descreption" multiline rows={2} fullWidth       onChange={e =>{setContent(e.target.value)}}    ></TextField>
{ ableSubmit ?  <Button variant='outlined' onClick={()=>{submitEditJournal(body , userLogin.token , emitAction , journal._id )}} > Submit Changes </Button> : <Typography color={(theme)=>theme.palette.secondary.dark} textAlign="center" > <i className="bi bi-exclamation-triangle-fill"></i> Please change something before submiting </Typography>}
</Stack>
}




//------------------------------------------------------ -------------------------------------------------------------------------------------------------------- one journal 
const OneJornalComponent = ({journal} : {journal : oneJournalState}) : JSX.Element =>{ 
const [editJournalComponent, setEditJournalComponent] = useState<boolean>(false)
const userLogin = useSelector((state : stateType)=>state.userLogin)
const dispatch : Dispatch = useDispatch()
const {emitAction}   = bindActionCreators( actionCreators , dispatch)
 


return <Stack spacing="32px"  m={2}  width={{sm : '80%' , xs : '95%'}} padding={2}  alignItems="center" direction={{xs: "column" , sm : 'row'}} justifyContent="space-around"   sx={{  backgroundColor: '#ffffff' , borderRadius: 2 , boxShadow : '1.5px 1.5px 3px black' , border: '2px solid black' , minHeight: '250px'  }} >
    {editJournalComponent ? <EditJournal journal={journal} />  : <DisplayJournal journal={journal} />}
   <Stack  width={{xs: '100%' , sm : '128px'}} spacing={3} direction={{xs: 'row' , sm : 'column'}}  >
   <Button fullWidth  sx={{ color: (theme)=>theme.palette.primary.main , maxWidth:'200px' , paddingX: '8px' , paddingY: '4px' ,border: (theme)=>`2px solid ${theme.palette.primary.main}` , '&:hover' : {color : '#fff' , backgroundColor : (theme)=>theme.palette.primary.main} }}  onClick={()=>{setEditJournalComponent(value => !value)}} > {editJournalComponent ? <span>display <i className="bi bi-card-list icon"></i> </span> : <span> edit <i className="bi bi-pencil icon"></i></span>}</Button> 
   <Button fullWidth  sx={{ color: 'red' , border: '2px solid red' ,  maxWidth:'200px' , paddingX: '8px' , paddingY: '2px' , '&:hover' : {color : '#fff' , backgroundColor:'red'} }}  onClick={()=>{deleteJournal(userLogin.token , emitAction , journal._id )}} > delete <i className="bi bi-trash icon"></i> </Button>
   </Stack>
   </Stack>
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

return <Stack width="100vw"  alignItems="center" >
<Typography variant='h3' color={(theme)=>theme.palette.secondary.light} margin={2}  >Your Journals</Typography>
{ journal.loading ? <JournalsSkeleton/> : journal.data?.allJournals.length ? journal.data?.allJournals.map((journal :oneJournalState)=>{
return  <OneJornalComponent journal={journal} /> 
}) :<Stack  gap="8px" margin="40px" bgcolor={(theme)=>theme.palette.white.light} width="90vw" padding='40px' alignItems="center" sx={{boxShadow : '2px 2px 4px black' , border: '1px solid black'}} > <Typography textAlign="center"  variant="h3" color={(theme)=>theme.palette.secondary.dark} >  <i className="bi bi-exclamation-triangle-fill"></i> Sorry ! </Typography><Typography textAlign="center" color={(theme)=>theme.palette.secondary.main} >No journals found , Try to write some journals</Typography></Stack>}
</Stack> 
}