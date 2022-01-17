import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FuntionContext } from '../Context/FuntionContext';
import { FunctionContextMain } from '../ContextMain/FunctionContextMain';
import { Modal } from '../Modal';

export const ThirdPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <h1>This is Third Page: Context in Functional Component</h1>
            <Link to="/"><h2>Home Page</h2></Link>

            <FuntionContext>
                <FunctionContextMain/>
            </FuntionContext>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
            {isOpen?<Modal setIsOpen={setIsOpen}/>:""}
        </>
    )
}
