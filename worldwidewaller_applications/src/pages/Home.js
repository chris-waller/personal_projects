import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <p>Welcome to World Wide Waller Applications</p>
      <h1>test</h1>
      <p>
        <a 
          href="http://precision2health-demo.s3-website-us-west-2.amazonaws.com/"
          target="__"
        >
          Precision2Health Demo Site
        </a>
      </p>
    </Layout>
  );
};

export default Home;