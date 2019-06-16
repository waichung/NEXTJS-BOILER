import withRedux from "next-redux-wrapper";
import initStore from "../store";
import { FAQView } from '../views';

const FAQPage = props => (
  <FAQView />
);

export default withRedux(initStore)(FAQPage);
