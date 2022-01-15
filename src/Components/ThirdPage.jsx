import React from 'react';
import { Link } from 'react-router-dom';
import { FuntionContext } from './Context/FuntionContext';
import { FunctionContextMain } from './FunctionContextMain';

export const ThirdPage = () => {
    return (
        <>
        <h1>This is Third Page:</h1>
            <Link to="/"><h2>Home Page</h2></Link>

            <FuntionContext>
                <FunctionContextMain/>
            </FuntionContext>

        </>
    )
}
