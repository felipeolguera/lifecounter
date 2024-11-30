// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const PlayerSection = ({
  level,
  life,
  setLife,
  setLevel,
  backgroundColor,
  flip,
}) => {
  const [trackerText, setTrackerText] = useState(""); // To store the dynamic tracker text
  const [delta, setDelta] = useState(0); // To store the cumulative change
  const [ldelta, setlDelta] = useState(0); // To store the cumulative change

  // Update life and tracker text
  const increaseLife = () => {
    setLife(life + 1);
    setDelta(delta + 1); // Increase the cumulative delta
  };

  const decreaseLife = () => {
    setLife(life - 1);
    setDelta(delta - 1); // Decrease the cumulative delta
  };

  // Update level and tracker text
  const increaseLevel = () => {
    setLevel(level + 1);
    setlDelta(ldelta + 1);
  };

  const decreaseLevel = () => {
    setLevel(level - 1);
    setlDelta(ldelta - 1); // Decrease the cumulative delta
  };

  // Update the tracker text dynamically whenever delta changes
  useEffect(() => {
    const absoluteDelta = Math.abs(delta); // Always use absolute value
    if (delta > 0) {
      setTrackerText(`Damage +${absoluteDelta}`);
    } else if (delta < 0) {
      setTrackerText(`Recover +${absoluteDelta}`); // Show positive for recovery
    } else {
      setTrackerText(""); // Clear text when delta is 0
    }
  }, [delta]);

  // Clear tracker text after 3 seconds of inactivity
  useEffect(() => {
    if (delta !== 0) {
      const timeout = setTimeout(() => {
        setTrackerText("");
        setDelta(0); // Reset delta after clearing the tracker text
      }, 2500);
      return () => clearTimeout(timeout);
    }
  }, [delta]);

  return (
    <div
      style={{
        ...playerSectionStyle,
        transform: flip ? "rotate(180deg)" : "none",
      }}
    >
      <div style={subcontentStyle}>
        <div style={levelStyle}>
          <button
            onClick={increaseLevel}
            style={{ ...lbuttonStyle, color: backgroundColor }}
          >
            +
          </button>
          <h1 style={levelStyle}>LVL: {level}</h1>

          <button
            onClick={decreaseLevel}
            style={{ ...lbuttonStyle, color: backgroundColor }}
          >
            -
          </button>
        </div>
      </div>
      <div style={statusStyle}>
        <p
          style={
            flip
              ? { ...trackerStyle, transform: "rotate(360deg)" }
              : trackerStyle
          }
        >
          {trackerText}
        </p>
      </div>

      <div style={controlsStyle}>
        <button
          onClick={increaseLife}
          style={{ ...buttonStyle, color: backgroundColor }}
        >
          +
        </button>

        <h1 style={{ ...lifeStyle, fontSize: life <= -10 ? "10rem" : "14rem" }}>
          {life}
        </h1>

        <button
          onClick={decreaseLife}
          style={{ ...buttonStyle, color: backgroundColor }}
        >
          -
        </button>
      </div>
    </div>
  );
};

const subcontentStyle = {
  display: "flex",
  height: "50px",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",

  // backgroundColor: "white",
};
const levelStyle = {
  // backgroundColor: "red",
  // width: "20%",
  display: "flex",
  color: "white",
  gap: "1rem",
};

const statusStyle = {
  // backgroundColor: "black",
  width: "80%",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
};

const playerSectionStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "1rem",
  backgroundImage: "url('/bgimage4.jpg')",
  backgroundSize: "cover", // Ensure the image covers the entire area
  backgroundPosition: "center", // Center the image
};

const lifeStyle = {
  fontSize: "14rem",
  marginBottom: "0.1rem",
  marginTop: "-4rem",
  color: "white",
};

const trackerStyle = {
  fontSize: "1.2rem",
  color: "white",
  marginBottom: "1rem",
  fontStyle: "italic",
};

const controlsStyle = {
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
  alignItems: "center",
};

const buttonStyle = {
  padding: "0.4rem 1.5rem",
  fontSize: "3rem",
  fontWeight: "bold",
  backgroundColor: "#000",
  opacity: 0.3,
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  height: "40%",
};

const lbuttonStyle = {
  justifyContent: "center",
  alignItems: "center",

  padding: "0.4rem 1rem",
  fontSize: "2rem",
  fontWeight: "bold",
  backgroundColor: "#000",
  opacity: 0.3,
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  // height: "40%",
};
export default PlayerSection;
