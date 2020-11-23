import React from 'react';

import About from '../components/about';
import Contact from '../components/contact';
import Hero from '../components/hero';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout splashScreen={false}>
      <Hero />
      <About />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
