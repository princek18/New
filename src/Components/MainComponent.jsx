import React, { Component } from 'react'
import { DisplayComponent } from './DisplayComponent';
import { InputComponent } from './InputComponent';


export default class MainComponent extends Component {
    constructor(){
        super();
        this.state = {
            date : new Date(),
            count: 0,
            flag : true,
            tasks: [],
            task: ""
        };
        this.stop = () => {
            this.setState({flag: !this.state.flag});
        };
        this.updateList = (e) => {
            e.preventDefault();
            this.setState({tasks: [...this.state.tasks, {data: this.state.task, key: this.state.tasks.length+1}], task: ""});
        };
        this.delete = (value) => {
            this.setState({tasks: this.state.tasks.filter((task) => task.key !== value)});   
        }
        this.style1 = {
            fontSize: "20px"
        }
        this.style2 = {
            fontSize: "50px"
        }
    }
    componentDidMount(){
        setInterval(() => {
            if(this.state.flag){
            this.setState({date: new Date()})
            }
            this.setState({count: this.state.count+1})
        }, 1000)
    }
    render() {
        return (
            <div>
                <div style={{display: "flex"}}>
                <p style={this.state.flag?this.style1:this.style2}>Hey there {this.state.date.toLocaleTimeString()}</p>
                <button style={{width: "100px", height: "30px", marginTop: "12px", marginLeft: "5px"}} onClick={this.stop}>Start/Stop</button>
                </div>
                <p>{this.state.count}</p>
                <hr />
                <InputComponent>
                <form onSubmit={this.updateList}>
                <h2>Enter any Task: </h2>
                <input type="text" placeholder='Enter any Task: ' value={this.state.task} onChange={(e) => this.setState({task: e.target.value})} />
                <button type='submit'>Save</button>
                </form>
                </InputComponent>
                <DisplayComponent tasks={this.state.tasks} deleteData={this.delete}/>
            </div>
        )
    }
}
