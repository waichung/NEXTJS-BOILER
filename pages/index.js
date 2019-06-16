import withRedux from "next-redux-wrapper";
import initStore from "../store";
import { HomeView } from '../views';
import styles from './style.scss';

const HomePage = props => (
  <div className={`${styles.test}`}>
    <HomeView />
  </div>
);

export default withRedux(initStore)(HomePage);
