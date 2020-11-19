import React from 'react';

import About from '../components/about';
import Hero from '../components/hero';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout splashScreen={false}>
      <Hero />
      <About />
    </Layout>
  );
};

export default IndexPage;
