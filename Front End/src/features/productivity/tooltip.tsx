import React from 'react'
import {format , parseISO} from 'date-fns'
function CustomTooltip({ active  , payload, label } : any) {
  if (active) {
    return (
      <div className="tooltip">
        <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
        <p>${payload[0].value.toFixed(2)} CAD</p>
      </div>
    );
  }
  return null;
}
export default CustomTooltip