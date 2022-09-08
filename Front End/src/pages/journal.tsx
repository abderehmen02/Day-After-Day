import React from 'react'
import DatePicker from 'react-date-picker';

function Journal() {
  return (
    <div>
              <DatePicker value={value} onChange={setValue} />
    </div>
  )
}

export default Journal