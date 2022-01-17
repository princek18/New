import React from 'react'
import { Link } from 'react-router-dom'
import ClassContext from '../Context/ClassContext'
import ClassContextMain from '../ContextMain/ClassContextMain'

export const SecondPage = () => {
    return (
        <>
        <h1>This is Second Page: Context in Class Component</h1>
            
            <Link to="/"><h1>Home Page</h1></Link>

            <ClassContext>
                <ClassContextMain />
            </ClassContext>
        </>
    )
}
