import React from 'react';
import Countdown from './Countdown';
import Jackpot from './Jackpot';

const Slider = () => {
  return(
    <div class="main-slider clearfix">
			<div class="countdown-jackpot">
				<div class="overlay-container">
					<img class="overlap-img" id="girl" src="http://asian-bet.local/wp-content/uploads/2018/12/header-girl.png" />
					<img class="overlap-img" id="cards" src="http://asian-bet.local/wp-content/uploads/2018/12/cards.png" />
					<Jackpot />
					<Countdown />
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