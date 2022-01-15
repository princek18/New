import React, { createContext, useState } from 'react'

export const FunctionUserContex = createContext();

export const FuntionContext = (props) => {
    const [tasks, setTasks] = useState([]);
    const deleteTask = (value) => {
        setTasks(tasks.filter((one) => one.key !== value));
    }
    return (
            <FunctionUserContex.Provider value={{tasks: tasks, setTasks: setTasks, deleteTask: deleteTask}}>
                {props.children}
            </FunctionUserContex.Provider>
    )
}
