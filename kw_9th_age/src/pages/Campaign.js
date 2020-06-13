import React from 'react';
import { Header } from 'semantic-ui-react';

import Layout from '../components/Layout';

const Campaign = () => {
  return (
    <Layout>
      <Header as="h2">Campaign Page</Header>
      <p>This page was loaded asynchronously!!!</p>
    </Layout>
  );
};

export default Campaign;