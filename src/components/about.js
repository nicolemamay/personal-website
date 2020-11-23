import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';

import useAboutQuery from '../hooks/useAboutQuery';
import ContentWrapper from '../styles/ContentWrapper';

const StyledBodyWrapper = styled.div`
  && {
    max-width: 600px;
  }
`;

const StyledDivider = styled.hr`
  && {
    height: 0.25rem;
    background-color: #ed3e3b;
    border: none;
    width: 30%;
    margin: 2rem 0;
  }
`;

const About = () => {
  const { title, body } = useAboutQuery();
  return (
    <section>
      <ContentWrapper>
        <StyledDivider />
        <StyledBodyWrapper>
          <h2>{title}</h2>
          <MDXRenderer>{body}</MDXRenderer>
        </StyledBodyWrapper>
      </ContentWrapper>
    </section>
  );
};

export default About;
