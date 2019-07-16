//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import Scoreboard from "./Components/Scoreboard"
import Buttons from "./Components/Buttons"

function App() {
  const [HomeScoreOn,setHomeScoreOn] = useState(45);
  const [AwayScoreOn, setAwayScoreOn] = useState(34);
  //Home = true, Away = false
  const touchdownHandler = (who)=> who ? setHomeScoreOn(HomeScoreOn+7) : setAwayScoreOn(AwayScoreOn+7)
  const fieldGoalHandler = (who)=> who ? setHomeScoreOn(HomeScoreOn+3) : setAwayScoreOn(AwayScoreOn+3)
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  return (
    <div className="container">
      <Scoreboard LionScore = {HomeScoreOn} TigerScore = {AwayScoreOn}/>
      <Buttons clickTouchdown = {touchdownHandler} clickFieldGoal = {fieldGoalHandler}/>
    </div>
  );
}



export default App;



