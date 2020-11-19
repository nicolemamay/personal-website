import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import useAboutQuery from '../hooks/useAboutQuery';
import ContentWrapper from '../styles/ContentWrapper';

const About = () => {
  const { title, body } = useAboutQuery();

  return (
    <ContentWrapper>
      <section>
        <h2>{title}</h2>
        <MDXRenderer>{body}</MDXRenderer>
      </section>
    </ContentWrapper>
  );
};

export default About;
