import React , {useState} from 'react'
import DatePicker from 'react-date-picker';
import { useSelector } from 'react-redux';
import { stateType } from '../state/reducers';
import '../features/journal/index.css' ;
import LoggedNav from "../components/loggedNav"
import { Box  , styled} from '@mui/material';
import {CreateJournal, JournalHeader, JournalsMap} from '../features/journal/components';

const JournalPageContainer = styled(Box)(({theme})=>({
  display : 'flex' ,
  alignItems : 'center' ,
  backgroundColor : theme.palette.primary.main ,
  flexDirection : "column"
}))


function Journal() {
    const [dateValue, setDateValue] = useState(new Date)
    const state : stateType = useSelector((state : stateType)=>state) ; 
  return (
    <JournalPageContainer>
      <LoggedNav/>
        <JournalHeader/>
        <CreateJournal date={dateValue} />
        <JournalsMap/>
        </JournalPageContainer>
  )
}

export default Journal