import React from 'react';

import About from '../components/about';
import Contact from '../components/contact';
import Hero from '../components/hero';
import Layout from '../components/layout';
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
