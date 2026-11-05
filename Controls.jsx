import React from "react";

function Controls(props) {
  return (
    <section className="controls">
      <h2>Add Runs</h2>
      <div className="button-row">
        <button onClick={() => props.addRun(1)}>+1</button>
        <button onClick={() => props.addRun(2)}>+2</button>
        <button onClick={() => props.addRun(3)}>+3</button>
        <button onClick={() => props.addRun(4)}>+4</button>
        <button onClick={() => props.addRun(6)}>+6</button>
      </div>
      <button className="reset-button" onClick={props.resetScore}>Reset Score</button>
    </section>
  );
}

export default Controls;
