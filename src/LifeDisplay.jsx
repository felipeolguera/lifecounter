import React from "react";

const LifeDisplay = ({ life }) => {
  return (
    <div style={{ fontSize: "2rem", margin: "1rem", textAlign: "center" }}>
      <p>Life Points:</p>
      <h1>{life}</h1>
    </div>
  );
};

export default LifeDisplay;
