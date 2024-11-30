import React, { useState } from "react";
import PlayerSection from "./PlayerSection";
import AdSpace from "./AdSpace";

const App = () => {
  const [player1Life, setPlayer1Life] = useState(0);
  const [player2Life, setPlayer2Life] = useState(0);

  const resetLife = () => {
    setPlayer1Life(0);
    setPlayer2Life(0);
  };

  return (
    <div style={appStyle}>
      <AdSpace />
      <div style={contentStyle}>
        <PlayerSection
          life={player1Life}
          setLife={setPlayer1Life}
          backgroundColor="#f0f8ff"
          flip={true}
        />

        <button onClick={resetLife} style={resetButtonStyle}>
          Reset All
        </button>

        <PlayerSection
          life={player2Life}
          setLife={setPlayer2Life}
          backgroundColor="#ffe4e1"
          flip={false}
        />
      </div>
    </div>
  );
};

const contentStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100dvh",
  width: "100vw",
  overflow: "hidden",
  position: "relative",
  alignItems: "center",
};

const appStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100dvh",
  width: "100vw",
  overflow: "hidden",
  position: "relative",
  alignItems: "center",
};

const resetButtonStyle = {
  position: "relative",
  padding: "0.8rem 1rem",
  fontSize: "1rem",
  fontWeight: "bold",
  width: "30%",
  backgroundColor: "#333",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default App;
