import React from 'react';
function CalendarGrid({ year,month,events }){
  const totalDays=new Date(year,month+1,0).getDate();
  const firstDay=new Date(year,month,1).getDay();
  const daysArray=Array.from({length:totalDays},(_, i)=> i+1);
  const emptyDays=Array.from({length:firstDay});
  function isEvent(day){
    const eventDate=`${year}-${String(month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
    return events.some((event)=>event.title===eventDate);
  };
  return(
    <div style={{ display:'grid',gridTemplateColumns:'repeat(7,1fr)',gap:'10px'}}>
      {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map((day)=>(
        <div key={day} style={{fontWeight:'bold',textAlign:'center'}}>{day}</div>
      ))}
      {emptyDays.map((_, index)=>(
        <div key={index}></div>
      ))}
      {daysArray.map((day) => (
        <div key={day} style={{textAlign:'center',fontWeight:isEvent(day)?'bold':'normal',color:isEvent(day)?'red':'black', }}>
          {day}
        </div>
      ))}
    </div>
  );
};
export default CalendarGrid;
