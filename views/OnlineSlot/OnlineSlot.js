import React from 'react';
import { PageLayout, GeneralLayout } from '../../components/Layout';
import Content from '../../components/Content';

const OnlineSlot = () => {
  return (
    <GeneralLayout>
      <Content>
        <PageLayout title="Online Slot" subtitle="This page is for online slots">
          <h1>Content</h1>
        </PageLayout>
      </Content>
    </GeneralLayout>
  );
};

export default OnlineSlot;