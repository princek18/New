import React, { Component, createContext } from 'react'

export const UserClassContext = createContext();

export default class ClassContext extends Component {
    state = {
        tasks: []
    }
    addTask = (task) => {
        this.setState({tasks: [...this.state.tasks, {value: task, key: this.state.tasks.length+1}]});
    }
    deleteTask = (value) => {
        this.setState({tasks: this.state.tasks.filter((one) => one.key !== value)});
    }
    render() {
        return (
            <UserClassContext.Provider value={{tasks: this.state.tasks, addTask: this.addTask, deleteTask: this.deleteTask}}>
                {this.props.children}
            </UserClassContext.Provider>
        )
    }
}
