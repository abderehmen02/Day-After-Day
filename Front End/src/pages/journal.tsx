import React , {useState} from 'react'
import DatePicker from 'react-date-picker';
import { useSelector } from 'react-redux';
import { stateType } from '../state/reducers';
import {CreateJournal, JournalsMap} from '../features/journal/components';
function Journal() {
    const [dateValue, setDateValue] = useState(new Date)
    const state : stateType = useSelector((state : stateType)=>state) ; 
    console.log("state") ;
    console.log(state)
  return (
    <div>
        <CreateJournal date={dateValue} />
        <JournalsMap/>
    </div>
  )
}

export default Journal