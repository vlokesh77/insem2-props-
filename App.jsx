import React, { useState } from "react";
import ScoreBoard from "./ScoreBoard.jsx";
import Controls from "./Controls.jsx";

function App() {
  const [score, setScore] = useState(0);

  function addRun(run) {
    setScore((currentScore) => currentScore + run);
  }

  function resetScore() {
    setScore(0);
  }

  return (
    <main className="app">
      <h1>Scoreboard</h1>
      <p className="subtitle">A simple React props and state project</p>

      <ScoreBoard score={score} />
      <Controls addRun={addRun} resetScore={resetScore} />
    </main>
  );
}

export default App;
