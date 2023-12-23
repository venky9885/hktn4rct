import React from "react";
const GenericProgressBar = ({ percentage, color }) => {
  console.log(percentage);
  return (
    <div
      style={{
        backgroundColor: "#e0e0e0",
        height: "10px",
        borderRadius: "5px",
        width: "90%",
      }}>
      <div
        style={{
          backgroundColor: color,
          width: percentage,
          height: "10px",
          borderRadius: "5px",
        }}></div>
    </div>
  );
};

export default GenericProgressBar;
