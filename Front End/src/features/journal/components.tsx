import React , {useState} from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { stateType } from '../../state/reducers';
import { submitJornal } from './functions';
import * as actionCreators from '../../state/actionCreators'

export const  CreateJournal = ({date} : {date : Date}) : JSX.Element=> {
    const [title, setTitle] = useState<string | undefined >("") ;
    const [content, setContent] = useState<string  | undefined>("") ;
    const userLogin = useSelector((state : stateType )=>state.userLogin ) ;
    const dispatch = useDispatch()  ; 
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

