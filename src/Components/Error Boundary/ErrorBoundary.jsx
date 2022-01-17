import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    state = {
        IsError : false
    }
    componentDidCatch(error, info){
        console.log(error);
        console.log(info);
    }
    static getDerivedStateFromError(error){
        return this.setState(
            {IsError: true}
        )
    }
    render() {
        return (
            <div>
                {this.state.IsError?<h1>Some Error Occured!</h1>:this.props.children}
            </div>
        )
    }
}
