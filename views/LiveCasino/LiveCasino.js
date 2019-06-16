import React from 'react';
import { PageLayout, GeneralLayout } from '../../components/Layout';
import Content from '../../components/Content';

const LiveCasino = () => {
  return (
    <GeneralLayout>
      <Content>
        <PageLayout title="Live Casino" subtitle="This page is for Live Casino">
          <h1>Content</h1>
        </PageLayout>
      </Content>
    </GeneralLayout>
  );
};

export default LiveCasino;