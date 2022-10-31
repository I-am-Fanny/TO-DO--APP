import React from "react";
import '../stylesheets/Task.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({ id, text, completed, completeTask, deleteTask }){
    return(
        <div className={completed ? 'task-container completed' : 'task-container'}>
            <section 
            className='task-text'
            onClick={()=> completeTask(id)} >
                {text}
            </section>
            <section 
            className='task-icons-container'
            onClick={()=> deleteTask(id)}>
                <AiOutlineCloseCircle className='task-icon' />
            </section>
        </div>
    );
}

export default Task;