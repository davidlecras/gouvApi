import React from 'react';

const timetable=(props)=>{
  let content= props.times.map((time,index)=>{
    return <li key= {index}>Du {time.du}, au {time.au} - De {time.heures[0].de} à {time.heures[0].a}</li>
  })
  return(
    <ul>{content}</ul>
  )
}

export default timetable;