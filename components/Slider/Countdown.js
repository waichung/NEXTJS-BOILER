import React from 'react';
import Countdown from 'react-countdown-now';

const renderer = ({ days, hours, minutes, seconds, completed}) => {
  return (
    <>
      <div class="time-container" id="days">
        <img src="http://asian-bet.local/wp-content/uploads/2018/12/Group-682.png" />
        <h1 class="time-unit">{days}</h1>
        <p>DAYS</p>
      </div>
      <div class="time-container" id="hours">
        <img src="http://asian-bet.local/wp-content/uploads/2018/12/Group-682.png" />
        <h1 class="time-unit">{hours}</h1>
        <p>HOURS</p>
      </div>
      <div class="time-container" id="mins">
        <img src="http://asian-bet.local/wp-content/uploads/2018/12/Group-682.png" />
        <h1 class="time-unit">{minutes}</h1>
        <p>MINS</p>
      </div>
      <div class="time-container" id="secs">
        <img src="http://asian-bet.local/wp-content/uploads/2018/12/Group-682.png" />
        <h1 class="time-unit">{seconds}</h1>
        <p>SECS</p>
      </div>
    </>
  );
}

const CountdownDiv = () => {
  return (
    <div class="countdown-timer-container">
      <img id="timer-icon" src="http://asian-bet.local/wp-content/uploads/2018/12/counterclockwise-rotation.png" />
      <div class="day-hours-mins-secs" id="countdown-timer-wrapper">
        <Countdown date={Date.now() + 1000000000} renderer={renderer}/>
      </div>
    </div>
  );
}

export default CountdownDiv;