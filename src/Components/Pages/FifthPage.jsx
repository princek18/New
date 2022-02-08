import React from "react";
import { Provider } from "react-redux";
import { Link } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { ReduxSagaDisplay } from "../DisplayComponents/ReduxSagaDisplay";
import { fetchReducer } from "../ReduxSaga/Reducers";
import createSagaMiddleware from "@redux-saga/core";
import { mySaga } from "../ReduxSaga/Saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(fetchReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);
export const FifthPage = () => {
  return (
    <>
            <h1>This is Fifth Page: Redux Using Redux-Saga</h1>
            
            <Link to="/"><h1>Home Page</h1></Link>
            <Provider store={store}>
                <ReduxSagaDisplay/>
            </Provider>
    </>
  )
};