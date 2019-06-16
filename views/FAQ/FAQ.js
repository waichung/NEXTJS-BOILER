import React from 'react';
import { PageLayout, GeneralLayout } from '../../components/Layout';
import Content from '../../components/Content';

const FAQ = () => {
  return (
    <GeneralLayout>
      <Content>
        <PageLayout title="FAQ" subtitle="Frequently asked questions">
        <div class="faq-content">
          <p class="guide">Total questions - common problems in playing online casinos. If users have questions, please contact the owner directly</p>
          <div class="questions-and-ans">
            <div class="tab">
              <input id="tab-one-0" type="checkbox" name="tabs" />
              <label for="tab-one-0">
                <img src="http://asian-bet.local/wp-content/uploads/2019/01/cards-qa.png" />
                How to apply for membership?
                <span class="circle"></span>
              </label>
              <div class="tab-content">
                <p>Please apply directly with your agent and pay him a hefty fee.</p>
              </div>
            </div>
            <div class="tab">
              <input id="tab-one-1" type="checkbox" name="tabs" />
              <label for="tab-one-1">
                <img src="http://asian-bet.local/wp-content/uploads/2019/01/cards-qa.png" />
                How to apply for membership?
                <span class="circle"></span>
              </label>
              <div class="tab-content">
                <p>Please apply directly with your agent and pay him a hefty fee.</p>
              </div>
            </div>
            <div class="tab">
              <input id="tab-one-2" type="checkbox" name="tabs" />
              <label for="tab-one-2">
                <img src="http://asian-bet.local/wp-content/uploads/2019/01/cards-qa.png" />
                How to apply for membership?
                <span class="circle"></span>
              </label>
              <div class="tab-content">
                <p>Please apply directly with your agent and pay him a hefty fee.</p>
              </div>
            </div>
            <div class="tab">
              <input id="tab-one-3" type="checkbox" name="tabs"/>
              <label for="tab-one-3">
                <img src="http://asian-bet.local/wp-content/uploads/2019/01/cards-qa.png" />
                How to apply for membership?
                <span class="circle"></span>
              </label>
              <div class="tab-content">
                <p>Please apply directly with your agent and pay him a hefty fee.</p>
              </div>
            </div>
            <div class="tab">
              <input id="tab-one-4" type="checkbox" name="tabs" />
              <label for="tab-one-4">
                <img src="http://asian-bet.local/wp-content/uploads/2019/01/cards-qa.png"/>
                How to apply for membership?
                <span class="circle"></span>
              </label>
              <div class="tab-content">
                <p>Please apply directly with your agent and pay him a hefty fee.</p>
              </div>
            </div>
            <div class="tab">
              <input id="tab-one-5" type="checkbox" name="tabs" />
              <label for="tab-one-5">
                <img src="http://asian-bet.local/wp-content/uploads/2019/01/cards-qa.png" />
                How to apply for membership?
                <span class="circle"></span>
              </label>
              <div class="tab-content">
                <p>Please apply directly with your agent and pay him a hefty fee.</p>
              </div>
            </div>    
          </div>
          <p class="footer-text">Total questions - common problems in playing online casinos. If users have questions, please contact the owner directly</p>
          <a href="https://google.com" class="play-win-btn">
              Play &amp; Win Now   
          </a>
        </div>
        </PageLayout>
      </Content>
    </GeneralLayout>
  );
};

export default FAQ;