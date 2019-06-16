import withRedux from "next-redux-wrapper";
import initStore from "../store";
import { LiveCasinoView } from '../views';

const LiveCasinoPage = props => (
  <LiveCasinoView />
);

export default withRedux(initStore)(LiveCasinoPage);
