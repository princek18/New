import React, { useContext, useEffect, useRef, useState } from 'react'
import { FunctionUserContex } from '../Context/FuntionContext';

export const FunctionContextMain = () => {
    const {tasks, setTasks, deleteTask} = useContext(FunctionUserContex);
    const [task, setTask] = useState("");
    const inputRef = useRef();
    const add = (e) => {
        e.preventDefault();
        setTasks([...tasks, {value: task, key: tasks.length+1}]);
        setTask("");
    }
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    return (
        <div style={{textAlign: "center"}}>
        <form onSubmit={add}>
            <input ref={inputRef} type="text" placeholder='Enter any task:' value={task} onChange={(e) => setTask(e.target.value)} />
            <button type='submit'>Save</button>
        </form>
        <h3>Tasks: </h3>
        {tasks.map((task) => {
            return <p style={{cursor: "pointer"}} onClick={() => deleteTask(task.key)} key={task.key}>{task.value}</p>
        })}
    </div>
    )
}
