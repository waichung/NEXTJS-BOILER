import withRedux from "next-redux-wrapper";
import initStore from "../store";
import { HomeView } from '../views';

const HomePage = props => (
  <HomeView />
);

export default withRedux(initStore)(HomePage);
