import React , {useState} from 'react'

export const  CreateJournal = ({date} : {date : Date}) : JSX.Element=> {
    const [title, setTitle] = useState<string | undefined >("") ;
    const [content, setContent] = useState<string  | undefined>("") ;
  return (
    <div>
    <div>CreateJournal</div>
    <input value={title}      onChange={(e)=>{setTitle(e.target.value)}} ></input>
    <input value={content}    onChange={(e)=>{setContent(e.target.value)}} ></input>
    </div>
  )
}

