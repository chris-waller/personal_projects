// npm imports
import React from 'react';
import { Link } from 'react-router-dom';

// custom components
import Layout from '../components/Layout';

const NoMatch = () => (
  <Layout>
    <h1>Page Not Found</h1>
    <Link to="/">Home</Link>
  </Layout>
);

export default NoMatch;
