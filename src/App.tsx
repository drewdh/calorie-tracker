import React from 'react';
import AppLayout from '@cloudscape-design/components/app-layout';
import Header from '@cloudscape-design/components/header';
import Table from '@cloudscape-design/components/table';
import TopNavigation from '@cloudscape-design/components/top-navigation';

export default function App() {
  return (
    <>
      <TopNavigation data-id="top-nav" identity={{ href: '/', title: 'Calorie Tracker' }} />
      <AppLayout
        headerSelector="[data-id='top-nav']"
        content={
          <Table
            columnDefinitions={[]}
            header={<Header variant="awsui-h1-sticky">Log</Header>}
            items={[]}
            stickyHeader
            variant="full-page"
          />
        }
        navigationHide
        toolsHide
      />
    </>
  );
}
