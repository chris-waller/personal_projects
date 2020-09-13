// npm imports
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

// custom components
import Layout from '~/components/Layout';

const Home = () => (
  <Layout>
    <h1>Welcome to my responsive web applition</h1>
    <br />
    <br />

    <Link to="/resume">Resume</Link>
    <br />
    <a
      href="http://precision2health-demo.s3-website-us-west-2.amazonaws.com/"
      target="__"
    >
      Precision2Health Demo Site
    </a>
  </Layout>
);

export default Home;
