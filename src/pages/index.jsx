import React from 'react';

import About from 'src/components/About/About';
import Contact from 'src/components/Contact/Contact';
import Hero from 'src/components/Hero/Hero';
import Layout from 'src/components/Layout/Layout';

import { doUseSplashScreen } from '../../config';

const IndexPage = () => {
  return (
    <Layout doUseSplashScreen={doUseSplashScreen}>
      <Hero />
      <About />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
