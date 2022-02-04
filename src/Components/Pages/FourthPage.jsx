import React from 'react';
import { Link } from 'react-router-dom';
import { ReduxDisplay } from '../DisplayComponents/ReduxDisplay';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { fetchReducer } from '../Redux/Reducers';

const store = createStore(fetchReducer, applyMiddleware(thunk));

export const FourthPage = () => {
    return (
        <>
            <h1>This is Fourth Page: Redux</h1>
            
            <Link to="/"><h1>Home Page</h1></Link>  
            <Provider store={store}>
            <ReduxDisplay/>
            </Provider>
        </>
    )
}
