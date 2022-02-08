import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
    return (
        <div>
            <h1>This is the Home Page!</h1>
            <Link to='/first'><h2>First Page</h2></Link>
            <hr />
            <Link to='/second'><h2>Second Page</h2></Link>
            <hr />
            <Link to='/third'><h2>Third Page</h2></Link>
            <hr />
            <Link to='/fourth'><h2>Fourth Page</h2></Link>
            <hr />
            <Link to='/fifth'><h2>Fifth Page</h2></Link>
        </div>
    )
}
