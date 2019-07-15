//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [LionScoreOn,setLionScoreOn] = useState(45);
  const [TigerScoreOn, setTigerScoreOn] = useState(34);
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{LionScoreOn}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{TigerScoreOn}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick = {()=> setLionScoreOn(LionScoreOn+7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {()=> setLionScoreOn(LionScoreOn+3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick = {()=> setTigerScoreOn(TigerScoreOn+7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {()=> setTigerScoreOn(TigerScoreOn+3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;


