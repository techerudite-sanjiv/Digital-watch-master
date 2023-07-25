import React, { useState } from "react";
import "./Clock.css";
const Clock = () => {
  
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  const [second, setSecond] = useState(new Date().getSeconds());

  let am=hours>=12?"PM":"AM";


  if(hours>12){
    hours=hours-12;
  }


  const UpdateTime = () => {
    setSecond(new Date().getSeconds());
  };

  setInterval(UpdateTime, 1000);

  return (
    <div className="clock">
      <div className="round" style={{border:"3px solid #ff00d9"}}>
        <h2>{hours}</h2>
        <p>hours</p>
      </div>
      <div className="round" style={{border:"3px solid yellow"}}>
        <h2>{minutes}</h2>
        <p>minutes</p>
      </div>
      <div className="round" style={{border:"3px solid #34ff01"}}>
        <h2>{second}</h2>
        <p>seconds</p>
      </div>
      <div className="format">
        <h2 id="meri">{am}</h2>
       
      </div>
    </div>
  );
};

export default Clock;
