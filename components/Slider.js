import React from 'react';

const Slider = () => {
  return(
    <div class="main-slider clearfix">
			<div class="countdown-jackpot">
				<div class="overlay-container">
					<img class="overlap-img" id="girl" src="http://asian-bet.local/wp-content/uploads/2018/12/header-girl.png" />
					<img class="overlap-img" id="cards" src="http://asian-bet.local/wp-content/uploads/2018/12/cards.png" />
					<div class="jackpot-container">
						<img id="jackpot-container-poker-icon" src="http://asian-bet.local/wp-content/uploads/2018/12/poker-chip.png"/>
						<h1 id="execute"><span>$</span>5,342,930</h1>
						<p>PROGRESSIVE JACKPOT</p>
					</div>
					<div class="countdown-timer-container">
						<img id="timer-icon" src="http://asian-bet.local/wp-content/uploads/2018/12/counterclockwise-rotation.png" />
						<div class="day-hours-mins-secs" id="countdown-timer-wrapper" data-deadline="2019-03-08 00:00:00">
							<div class="time-container" id="days">
								<img src="http://asian-bet.local/wp-content/uploads/2018/12/Group-682.png" />
								<h1 class="time-unit">06</h1>
								<p>DAYS</p>
							</div>
							<div class="time-container" id="hours">
								<img src="http://asian-bet.local/wp-content/uploads/2018/12/Group-682.png" />
								<h1 class="time-unit">05</h1>
								<p>HOURS</p>
							</div>
							<div class="time-container" id="mins">
								<img src="http://asian-bet.local/wp-content/uploads/2018/12/Group-682.png" />
								<h1 class="time-unit">42</h1>
								<p>MINS</p>
							</div>
							<div class="time-container" id="secs">
								<img src="http://asian-bet.local/wp-content/uploads/2018/12/Group-682.png" />
								<h1 class="time-unit">03</h1>
								<p>SECS</p>
							</div>
						</div>
					</div>
				</div>
			</div>
      <div class="layer-slider" style={{"height": "451px"}}>
        <ul class="slides">
          <li class="" data-thumb-alt="" style={{"width": "100%", float: "left", "margin-right": "-100%", position: "relative", opacity: 0, display: "block", "z-index": 1}}><div class="image-slider " style={{"background-image":"url(http://asian-bet.local/wp-content/uploads/2019/01/1920x1080_withoutmodel.jpg)"}}></div></li>
          <li data-thumb-alt="" style={{"width": "100%", float: "left", "margin-right": "-100%", position: "relative", opacity: 1, "display": "block", "z-index": 2}} class="flex-active-slide"><div class="image-slider " style={{"background-image":"url(http://asian-bet.local/wp-content/uploads/2019/01/1920x1080_withoutmodel.jpg)"}}></div></li>
        </ul>
        <ol class="flex-control-nav flex-control-paging"><li><a href="#" class="">1</a></li><li><a href="#" class="flex-active">2</a></li></ol>
        <ul class="flex-direction-nav">
          <li class="flex-nav-prev"><a class="flex-prev" href="#">Previous</a></li>
          <li class="flex-nav-next"><a class="flex-next" href="#">Next</a></li>
        </ul>
      </div>
      <div class="small-slider" style={{"height": "0px"}}>
        <ul class="slides">
          <li style={{"width": "100%", float: "left", "margin-right": "-100%", position: "relative", opacity: 1, display: "block", "z-index": 2}} class="flex-active-slide" data-thumb-alt=""><div class="image-slider " style={{"background-image":"url(http://asian-bet.local/wp-content/uploads/2019/01/Screen-Shot-2019-01-21-at-5.54.13-PM.png)"}}></div></li>
          <li data-thumb-alt="" style={{"width": "100%", float: "left", "margin-right": "-100%", position: "relative", opacity: 0, display: "block", "z-index": 1}}><div class="image-slider " style={{"background-image":"url(http://asian-bet.local/wp-content/uploads/2019/01/Screen-Shot-2019-01-21-at-5.54.13-PM.png)"}}></div></li>			
        </ul>
        <ol class="flex-control-nav flex-control-paging">
          <li><a href="#" class="flex-active">1</a></li><li><a href="#">2</a></li>
        </ol>
        <ul class="flex-direction-nav">
          <li class="flex-nav-prev"><a class="flex-prev" href="#">Previous</a></li>
          <li class="flex-nav-next"><a class="flex-next" href="#">Next</a></li>
        </ul>
      </div>
		</div>
  );
}

export default Slider;