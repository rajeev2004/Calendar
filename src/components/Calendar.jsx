import React, { useState } from 'react';
import CalendarGrid from './CalendarGrid';
import AddEvent from './AddEvent';
import Event from './Event';
import '../styles/calendar.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';
function Calendar(){
  const [currentDate,setCurrentDate]=useState(new Date());
  const [events,setEvents]=useState([]);
  const [isEditing,setIsEditing]=useState(null);
  const [editEventData,setEditEventData]=useState({
    title: "",
    content: ""
  });
  function handleEvents(newEvent){
    setEvents((prevEvents)=>{
      return [...prevEvents, newEvent];
    });
  }
  function handlePrevMonth(){
    setCurrentDate((prev)=>{
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth()-1);
      return newDate;
    });
  }
  function handleNextMonth(){
    setCurrentDate((prev)=>{
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth()+1);
      return newDate;
    });
  }
  function handleEditEvent(index){
    setIsEditing(index);
    setEditEventData(events[index]);
  }
  function handleChangeEdit(event){
    const {name,value}=event.target;
    setEditEventData((prevData)=>({
      ...prevData,
      [name]:value
    }));
  }
  function handleSaveEvent(index){
    setEvents((prevEvents)=>{
      const updatedEvents=[...prevEvents];
      updatedEvents[index]=editEventData;
      return updatedEvents;
    });
    setIsEditing(null);
  }
  function deleteEvent(index){
    setEvents((prevEvents)=>{
      return prevEvents.filter((item,i)=>i!==index);
    });
  }
  const year=currentDate.getFullYear();
  const month=currentDate.getMonth();
  return(
    <div className='calendar-container'>
      <header>
        <button onClick={handlePrevMonth}>Previous</button>
        <h2>
          {currentDate.toLocaleString('default',{ month:'long'})} {year}
        </h2>
        <button onClick={handleNextMonth}>Next</button>
      </header>
      <CalendarGrid year={year} month={month} events={events}/>
      <p>EVENTS</p>
      <AddEvent onAdd={handleEvents} />
      {events.map((eventItem,index) => (
        <div key={index}>
          {isEditing===index ? (
            <div className='event-edit'>
              <input
                type="text"
                name="title"
                value={editEventData.title}
                onChange={handleChangeEdit}
              />
              <textarea
                name="content"
                value={editEventData.content}
                onChange={handleChangeEdit}
              />
              <button onClick={()=>handleSaveEvent(index)}><DoneIcon /></button>
              <button onClick={()=>setIsEditing(null)}><CancelIcon /></button>
            </div>
          ):(
            <Event
              key={index}
              title={eventItem.title}
              content={eventItem.content}
            />
          )}
          <button onClick={()=>handleEditEvent(index)}><EditIcon /></button>
          <button onClick={()=>deleteEvent(index)}><DeleteIcon /></button>
        </div>
      ))}
    </div>
  );
}
export default Calendar;
