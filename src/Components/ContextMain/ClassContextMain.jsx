import React, { Component, createRef } from 'react'
import { UserClassContext } from '../Context/ClassContext'

export default class ClassContextMain extends Component {
    static contextType = UserClassContext;
    inputRef = createRef();
    state = {
        task: ""
    }
    addTask = this.context.addTask;
    deleteTask = this.context.deleteTask;
    sub = (e) => {
        e.preventDefault();
        this.addTask(this.state.task);
        this.setState({task: ""})
    }
    componentDidMount(){
        this.inputRef.current.focus();
    }
    render() {
        return (
            <div style={{textAlign: "center"}}>
                <form onSubmit={this.sub}>
                    <input ref={this.inputRef} type="text" placeholder='Enter any task:' value={this.state.task} onChange={(e) => this.setState({task: e.target.value})} />
                    <button type='submit'>Save</button>
                </form>
                <h3>Tasks: </h3>
                {this.context.tasks.map((task) => {
                    return <p style={{cursor: "pointer"}} onClick={() => this.deleteTask(task.key)} key={task.key}>{task.value}</p>
                })}
            </div>
        )
    }
}
