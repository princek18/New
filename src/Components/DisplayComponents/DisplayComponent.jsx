import React, { useState } from "react";
import scenary from '../../Styles/scenary.jpg'
import '../../Styles/style.css'

export const DisplayComponent = ({ tasks, deleteData }) => {
    const [imageFlag, setImageFlag] = useState(true);
  const styles = {
    cursor: "pointer",
  };
  return (
    <div style={{display: "flex"}}>
        <div>
      All tasks are:
      {tasks.map((task) => {
        return (
          <h3
            style={styles}
            onClick={() => deleteData(task.key)}
            key={task.key}
          >
            {task.data}
          </h3>
        );
      })}
      </div>
      <div onClick={() => setImageFlag(!imageFlag)}>
        <img
          className={imageFlag ? "small" : "large"}
          src={scenary}
          alt="Not found"
        />
      </div>
    </div>
  );
};
