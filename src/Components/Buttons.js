import React from "react";
import "../App.css"



function Buttons(props){
    console.log('button',props)
    return(
      <section className="buttons">
          <div className="homeButtons">
          <button onClick = {()=> props.clickTouchdown(true)} className="homeButtons__touchdown">Home Touchdown</button>
            <button onClick = {()=> props.clickFieldGoal(true)} className="homeButtons__fieldGoal">Home Field Goal</button>
          </div>
          <div className="awayButtons">
            <button onClick = {()=> props.clickTouchdown(false)} className="awayButtons__touchdown">Away Touchdown</button>
            <button onClick = {()=> props.clickFieldGoal(false)} className="awayButtons__fieldGoal">Away Field Goal</button>
          </div>
        </section>
    )
  
  }
  
  
  export default Buttons;