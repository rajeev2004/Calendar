import React,{useState} from "react";
import '../styles/addEvent.css';
import AddIcon from '@mui/icons-material/Add';
function AddEvent(props){
    const [note,setNote]=useState({
        title:"",
        content:"",
    });
    function handleChange(event){
        const {name,value}=event.target;
        setNote((prevNote)=>{
            return {
                ...prevNote,
                [name]:value,
            };
        });
    }
    function submitEvent(event){
        props.onAdd(note);
        setNote({
            title:"",
            content:"",
        });
        event.preventDefault();
    }
    return (
        <div>
            <form className="create-event">
                <input
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Date"
                />
                <textarea
                    name="content"
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Enter an event..."
                />
                <button onClick={submitEvent}><AddIcon /></button>
            </form>
        </div>
    )
}
export default AddEvent;