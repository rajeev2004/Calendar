import React from "react";
import '../styles/event.css';
function Event(props) {
  return(
    <div className="event">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}
export default Event;
