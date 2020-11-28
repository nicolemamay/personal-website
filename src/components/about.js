import React, { Fragment } from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';

import useAboutQuery from '../hooks/useAboutQuery';
import ContentWrapper from '../styles/ContentWrapper';
import Icon from './icon';

import Divider from './divider';

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    display: flex;
    flex-direction: row;
    justify-content: start;
  }
`;

const StyledHeading = styled.div`
  && {
    display: flex;
    flex-direction: column;
    padding-right: 4rem;
  }
`;

const StyledBody = styled.div`
  && {
    display: flex;
    flex-direction: column;
  }
`;

const StyledIcons = styled.div`
  && {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const About = () => {
  const { subheading, subheadingSecondary, title, body } = useAboutQuery();

  const iconsSkills = [
    {
      name: 'javascript',
      subtitle: 'JavaScript',
    },
    {
      name: 'react',
      subtitle: 'React',
    },
    {
      name: 'redux',
      subtitle: 'Redux',
    },
    {
      name: 'jest',
      subtitle: 'Jest',
    },
    {
      name: 'storybook',
      subtitle: 'Storybook',
    },
    {
      name: 'contentful',
      subtitle: 'Contentful',
    },
  ];

  const iconsLearning = [
    {
      name: 'typescript',
      subtitle: 'TypeScript',
    },
  ];

  const hasIconsSkills = !!iconsSkills && iconsSkills.length > 0;
  const hasIconsLearning = !!iconsLearning && iconsLearning.length > 0;

  return (
    <section id="about">
      <StyledContentWrapper>
        <StyledHeading>
          <Divider />
          <h2>{title}</h2>
        </StyledHeading>
        <StyledBody>
          <MDXRenderer>{body}</MDXRenderer>
          {hasIconsSkills && (
            <Fragment>
              <h3>{subheading}</h3>
              <StyledIcons>
                {iconsSkills.map(({ name, subtitle }) => (
                  <Icon key={name} name={name} subtitle={subtitle} />
                ))}
              </StyledIcons>
            </Fragment>
          )}
          {hasIconsLearning && (
            <Fragment>
              <h3>{subheadingSecondary}</h3>
              <StyledIcons>
                {iconsLearning.map(({ name, subtitle }) => (
                  <Icon key={name} name={name} subtitle={subtitle} />
                ))}
              </StyledIcons>
            </Fragment>
          )}
        </StyledBody>
      </StyledContentWrapper>
    </section>
  );
};

export default About;
