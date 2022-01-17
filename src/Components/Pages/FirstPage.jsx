import React from 'react'

import { Link } from 'react-router-dom'
import { DisplayComponentB } from '../DisplayComponents/DisplayComponentB'
import MainComponent from '../MainComponent'
import { WrapperComponent } from '../WrapperComponent'

export const FirstPage = () => {
    return (
        <div>
            <Link to="/"><h1>Home Page</h1></Link>
            <WrapperComponent>
                <MainComponent />
                <DisplayComponentB/>
            </WrapperComponent>
        </div>
    )
}
