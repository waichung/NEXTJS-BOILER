import withRedux from "next-redux-wrapper";
import initStore from "../store";
import { AffiliateView } from '../views';

const AffiliatePage = props => (
  <AffiliateView />
);

export default withRedux(initStore)(AffiliatePage);
