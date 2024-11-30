import React, { useState } from "react";

const Settings = ({ setStartingLife }) => {
  const [inputLife, setInputLife] = useState(20);

  const handleSave = () => {
    setStartingLife(Number(inputLife));
  };

  return (
    <div style={{ textAlign: "center", margin: "1rem" }}>
      <label>
        Starting Life Points:
        <input
          type="number"
          value={inputLife}
          onChange={(e) => setInputLife(e.target.value)}
          style={inputStyle}
        />
      </label>
      <button onClick={handleSave} style={buttonStyle}>
        Save
      </button>
    </div>
  );
};

const inputStyle = {
  margin: "0.5rem",
  padding: "0.5rem",
  fontSize: "1rem",
  width: "60px",
  textAlign: "center",
};

const buttonStyle = {
  padding: "0.5rem 1rem",
  fontSize: "1rem",
  cursor: "pointer",
  backgroundColor: "#28A745",
  color: "#FFF",
  border: "none",
  borderRadius: "5px",
  marginLeft: "0.5rem",
};

export default Settings;
