import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const ReduxSagaDisplay = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state);
  return (
    <div>
        <button className="btn" onClick={() => dispatch({type: "API_REQUEST"})}>Fetch</button>
        {(data && data.length>0) ? data.map((user) => {
                return <ul key={user.id} onClick={() => dispatch({type: "DELETE_DATA", payload: user.id})}>
                    <p>Name: {user.name}</p>
                    <p>Email:{user.email}</p>
                    <hr />
                </ul>
            }):(data && data.error)? <h1>{data.error}</h1>:""}
    </div>
  )
};
