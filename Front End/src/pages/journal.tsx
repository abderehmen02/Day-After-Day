import React , {useState} from 'react'
import DatePicker from 'react-date-picker';

function Journal() {
    const [dateValue, setDateValue] = useState(new Date)
  return (
    <div>
              <DatePicker value={dateValue} isOpen={true} onChange={setDateValue} />
    </div>
  )
}

export default Journal