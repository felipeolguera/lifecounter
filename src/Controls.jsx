import React from "react";

const Controls = ({ increaseLife, decreaseLife, resetLife }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
      <button onClick={increaseLife} style={buttonStyle}>
        +
      </button>
      <button onClick={decreaseLife} style={buttonStyle}>
        -
      </button>
      <button onClick={resetLife} style={buttonStyle}>
        Reset
      </button>
    </div>
  );
};

const buttonStyle = {
  padding: "0.5rem 1rem",
  fontSize: "1.2rem",
  cursor: "pointer",
  backgroundColor: "#007BFF",
  color: "#FFF",
  border: "none",
  borderRadius: "5px",
};

export default Controls;
