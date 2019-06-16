import withRedux from "next-redux-wrapper";
import initStore from "../store";
import { OnlineSlotView } from '../views';

const OnlineSlotPage = props => (
  <OnlineSlotView />
);

export default withRedux(initStore)(OnlineSlotPage);
