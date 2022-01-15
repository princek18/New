import React from 'react'
import { DisplayComponentB } from './DisplayComponentB'
import MainComponent from './MainComponent'
import { WrapperComponent } from './WrapperComponent'
import { Link } from 'react-router-dom'

export const FirstPage = () => {
    return (
        <div>
            <Link to="/"><h1>Home Page</h1></Link>
            <WrapperComponent>
                <MainComponent />
                <DisplayComponentB />
            </WrapperComponent>
        </div>
    )
}
