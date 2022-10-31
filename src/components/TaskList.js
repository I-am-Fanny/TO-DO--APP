import React from "react";
import TaskForm from './TaskForm';
import Task from "./Task";
import '../stylesheets/TaskList.css';
import { useState } from 'react';

function TaskList(){
    
    const[tasks, setTasks] = useState([]);
    
    const addTask = (task)=>{
      if(task.text.trim()){
        task.text = task.text.trim();

        const updateTask = [task, ...tasks];
        setTasks(updateTask); 
      }
    };

    const deleteTask = id =>{
      const updateTask = tasks.filter(task=> task.id !== id);
      setTasks(updateTask);
    }

    const completeTask = id => {
      const updateTask = tasks.map(task =>{
        if(task.id === id){
          task.completed = !task.completed
        }
        return task;
      });
      setTasks(updateTask);
    }
    
    
    return(
        <>
        <TaskForm  onSubmit={addTask} />
        <div className='task-list-container'>
            {
              tasks.map((task)=>
              <Task
               key={task.id}
               id={task.id}
               text={task.text}
               completed={task.completed}
               completeTask={completeTask}
               deleteTask={deleteTask}
              />
              )
            }
        </div>
        </>
    );
}


export default TaskList;