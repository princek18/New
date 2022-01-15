import React from 'react'
import ClassContextMain from './ClassContextMain'
import ClassContext from './Context/ClassContext'
import { Link } from 'react-router-dom'

export const SecondPage = () => {
    return (
        <>
            <Link to="/"><h1>Home Page</h1></Link>

            <ClassContext>
                <ClassContextMain />
            </ClassContext>
        </>
    )
}
