import withRedux from "next-redux-wrapper";
import initStore from "../store";
import { ContactUsView } from '../views';

const ContactUsPage = props => (
  <ContactUsView />
);

export default withRedux(initStore)(ContactUsPage);
