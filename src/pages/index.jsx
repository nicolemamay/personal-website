import React from 'react';

import About from 'src/components/About/About';
import Contact from 'src/components/Contact/Contact';
import Hero from 'src/components/Hero/Hero';
import Layout from 'src/components/Layout/Layout';
import SEO from 'src/components/SEO/SEO';

import { doUseSplashScreen, siteTitle } from '../../config';

const IndexPage = () => {
  return (
    <Layout doUseSplashScreen={doUseSplashScreen}>
      <SEO title={siteTitle} />
      <Hero />
      <About />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
