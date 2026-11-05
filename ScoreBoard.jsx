import React from "react";

function ScoreBoard(props) {
  return (
    <section className="score-card">
      <p className="score-label">CURRENT SCORE</p>
      <h2>{props.score} <span>RUNS</span></h2>
    </section>
  );
}

export default ScoreBoard;
