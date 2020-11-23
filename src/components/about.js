import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import useAboutQuery from '../hooks/useAboutQuery';
import ContentWrapper from '../styles/ContentWrapper';

import Divider from './divider';

const About = () => {
  const { title, body } = useAboutQuery();

  return (
    <section>
      <ContentWrapper>
        <Divider />
        <h2>{title}</h2>
        <MDXRenderer>{body}</MDXRenderer>
      </ContentWrapper>
    </section>
  );
};

export default About;
