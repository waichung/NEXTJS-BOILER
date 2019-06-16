import React from 'react';

const Content = ({children}) => {
  return (
    <div class="site-content-container">
      <div id="content" class="site-content">
        <div id="wrap__contact-container">
          <div class="wrap__contact-container__tab">
            <input id="contact-tab" type="checkbox" name="tabs" />
            <img src="http://asian-bet.local/wp-content/uploads/2018/12/poker-chip-1.png" />
            <label for="contact-tab"><div>CONTACT</div></label>
            <div class="contact-tab-content">
              <div>
                <img class="qr_code" src="http://asian-bet.local/wp-content/uploads/2018/03/single-1.jpg" />
                <img class="email-icon" src="http://asian-bet.local/wp-content/uploads/2018/12/close-envelope@2x.png" />
                <span>vallence@sunny.org</span>
                <br />
                <img class="email-icon" src="http://asian-bet.local/wp-content/uploads/2018/12/whatsapp-1@2x.png" />
                <span>+65 9227 2331</span>
                <br />
                <img class="email-icon" src="http://asian-bet.local/wp-content/uploads/2018/12/whatsapp-1@2x-1.png" />
                <span>+65 9227 2331</span>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Content;