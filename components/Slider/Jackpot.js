import React from 'react';
import CountUp, {useCountUp} from 'react-countup';

const formatNumber = (num) => {
  const numberOfDigits = num.length;
  let ans = num.toString();
  for (var i=0; i<numberOfDigits; i++) {
    if((i+1) % 3 === 0) {
      ans = insert(numberOfDigits - i - 1, ans);
    } 
  }
  return ans;
}


function insert (index, string) {
  if (index > 0)
  return string.substring(0, index) + ',' + string.substring(index, string.length);

  return string + ',';
}

const Jackpot = () => {
  const { countUp, start, pauseResume, reset, update } = useCountUp({
    start: 6668464,
    end: 1567892435,
    delay: 1,
    duration: 10000000000,
    onReset: () => console.log('Resetted!'),
    onUpdate: () => console.log('Updated!'),
    onPauseResume: () => console.log('Paused or resumed!'),
    onStart: ({ pauseResume }) => console.log(pauseResume),
    onEnd: ({ pauseResume }) => reset(),
  });
  return (
    <div class="jackpot-container">
      <img id="jackpot-container-poker-icon" src="http://asian-bet.local/wp-content/uploads/2018/12/poker-chip.png"/>
      <h1 id="execute"><span>$</span>{formatNumber(countUp)}</h1>
      <p>PROGRESSIVE JACKPOT</p>
    </div>
  );
}

export default Jackpot;