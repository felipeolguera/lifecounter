import React from "react";

const AdSpace = () => {
  return (
    <div style={adSpaceStyle}>
      <p style={adTextStyle}>Ad Space</p>
    </div>
  );
};

const adSpaceStyle = {
  // position: "absolute",
  top: 0,
  left: 0,
  width: "100vw",
  height: "80px",
  backgroundColor: "#f1f1f1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderTop: "1px solid #ccc",
};

const adTextStyle = {
  fontSize: "1rem",
  color: "#666",
};

export default AdSpace;
