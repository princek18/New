import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteData, fetchData } from "../Redux/ActionCreators";

export const ReduxDisplay = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.state);
  return (
    <>
      <h3>State is Managed using Redux here:</h3>
      <div>
        <button onClick={() => dispatch(fetchData())}>Fetch Data</button>
      </div>
        <div>
            {(data && data.length>0) ? data.map((user) => {
                return <ul key={user.id} onClick={() => dispatch(deleteData(user.id))}>
                    <p>Name: {user.name}</p>
                    <p>Email:{user.email}</p>
                    <hr />
                </ul>
            }):(data && data.error)? <h1>{data.error}</h1>:""}
        </div>
    </>
  );
};
