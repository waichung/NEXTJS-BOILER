import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const GeneralLayout = ({children}) => {
  return (
    <div id="page" class="site">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default GeneralLayout;