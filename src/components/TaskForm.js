import React from "react";
import '../stylesheets/TaskForm.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function TaskForm(props){
    
    const [input, setInput] = useState('');

    const handleChange = event =>{
        setInput(event.target.value);
    };

    const handleSubmit = event =>{
        event.preventDefault();

    const newTask = {
        id:uuidv4(),
        text:input,
        completed:false
    }

    props.onSubmit(newTask); 
};

    return(
        <form 
        className='task-form'
        onSubmit={handleSubmit}>
            <input
            className='task-input' 
            type='text' 
            name='text'
            placeholder='Write a task'
            onChange={handleChange}
            />
            <button className='task-button'>
                Add task
            </button>
        </form>
    );
}


export default TaskForm;