import styles from './home.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Slider from '../../components/Slider';
import Content from '../../components/Content';
import { GeneralLayout } from '../../components/Layout';

const HomeView = () => {
  return (
    <GeneralLayout>
      <Slider />
      <Content>
        <div id="easy-three-steps">
          <div class="wrap__banner-container">
            <h1>Easy <span>3 Steps</span></h1>
            <div class="wrap__banner-steps">
              <div class="wrap__banner-steps-single">
                <div>
                  <img class="step-icon-1" src="http://asian-bet.local/wp-content/uploads/2019/01/registered-icon.png" />
                </div>
                <h1>Register</h1>
              </div>
              <div class="wrap__banner-steps-single">
                <div>
                  <img class="step-icon-2" src="http://asian-bet.local/wp-content/uploads/2019/01/buy-credits-icon.png" />
                </div>
                <h1>Buy Credits</h1>
              </div>
              <div class="wrap__banner-steps-single">
                <div>
                  <img class="step-icon-3" src="http://asian-bet.local/wp-content/uploads/2019/01/play-win-icon.png" />
                </div>
                <h1>Play &amp; Win</h1>
              </div>		
            </div>

            <div class="wrap__banner-games">
              <div class="wrap__banner-games-single">
                    <img src="http://asian-bet.local/wp-content/uploads/2019/01/330x580_v1_withoutmodel.jpg" />
                    <div class="title"><p>Baccarat</p></div>
              </div>
              <div class="wrap__banner-games-single">
                <img src="http://asian-bet.local/wp-content/uploads/2019/01/330x580_v2.jpg" />
                <div class="title"><p>Dragon Tiger</p></div>
              </div>
              <div class="wrap__banner-games-single">
                <img src="http://asian-bet.local/wp-content/uploads/2019/01/330x580_v3.jpg" />
                <div class="title"><p>Slot Machine</p></div>
              </div>
              <div class="wrap__banner-games-single">
                <img src="http://asian-bet.local/wp-content/uploads/2019/01/330x580_v4.jpg" />
                <div class="title"><p>Fu Fish Online</p></div>
              </div>		
            </div>
          </div>
        </div>
        <div class="wrap"> 
          <div class="wrap__banner-container">
            <img id="outlier" src="http://asian-bet.local/wp-content/uploads/2018/12/poker.png"/>
            <h1 id="about-title">We specialize in the online casino industry</h1>
            <div id="about-content">
              <p>Lorem ipsum dolor sit amet, harum cetero democritum at eum, reque singulis laboramus pri in. Eum officiis definiebas te. Meis labores dolores no per, sit saperet impedit periculis et. Vis aperiri appareat cu. Ad fabulas tincidunt cum. Vim in nisl legendos dignissim, eu epicurei pericula duo. Pri eligendi probatus persecuti ut, cu inani appetere voluptatibus has. Legere officiis qualisque ne ius, pri summo incorrupte in. Ne erat viris noluisse eam, utroque interesset dissentiet et his. Solum apeirian cu nec, eam no nibh persius vulputate. Iuvaret minimum at vis, te sea voluptatibus signiferumque, no quidam prompta sapientem sit. At prima primis assentior sea. Nonumy dicunt assueverit vim et, pro harum eripuit eu. Qui graecis vivendo eu. An eos animal ponderum, ad duo primis vocent interpretaris. Te est phaedrum explicari, sea te modo vocibus senserit. Mel eu nobis postea. Dicta corpora apeirian per eu, facilisis intellegebat definitiones in mel. His ad consul rationibus disputationi, cum cibo nemore ad.</p>
            </div>
          </div>
        </div>
      </Content>
    </GeneralLayout>
  )
}

export default HomeView;