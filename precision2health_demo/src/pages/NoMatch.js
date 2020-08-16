import React, {Component} from 'react';

import Layout from '../components/Layout';

class NoMatch extends Component {
  render() {
    return (
      <Layout >
      <p>PAGE NOT FOUND. YOU SHOULDN'T BE HERE.</p>    
    </Layout>
    );
  }
}

export default NoMatch;