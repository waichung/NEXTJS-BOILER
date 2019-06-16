import React from 'react';
import { PageLayout, GeneralLayout } from '../../components/Layout';
import Content from '../../components/Content';

const ContactUs = () => {
  return (
    <GeneralLayout>
      <Content>
        <PageLayout title="ContactUs" subtitle="we are here to help 24/7">
        <div class="contact-us-container">
          <div class="contacts">
            <div class="address-block">
              <h6>Address 1</h6>
              <p>street name,</p>
              <p>street name two,&nbsp;</p>
              <p>singapore</p>
            </div>
            <div class="address-block">
              <h6>Address 2</h6>
              <p>street name,</p>
              <p>street name two,&nbsp;</p>
              <p>singapore</p>
            </div>
            <div class="contact-fields">
              <div class="field">
                <img src="http://asian-bet.local/wp-content/uploads/2019/01/white-email.png" />
                <span>example@gmail.com</span>
              </div><div class="field">
                <img src="http://asian-bet.local/wp-content/uploads/2019/01/whatsapp.png" />
                <span>+65 92272331</span>
              </div><div class="field">
                <img src="http://asian-bet.local/wp-content/uploads/2019/01/whatsapp.png" />
                <span>+65 92272331</span>
              </div>      
            </div>
          </div>
          <img src="http://asian-bet.local/wp-content/uploads/2018/03/album-1.jpg" />
        </div>
        </PageLayout>
      </Content>
    </GeneralLayout>
  );
};

export default ContactUs;