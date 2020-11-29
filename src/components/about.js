import React, { Fragment, useContext, useEffect, useRef } from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';

import Context from '../context';
import useAboutQuery from '../hooks/useAboutQuery';
import useIsOnScreen from '../hooks/useIsOnScreen';
import ContentWrapper from '../styles/ContentWrapper';

import Icon from './icon';
import Divider from './divider';

import config from '../../config';

const { icons } = config;

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    display: flex;
    flex-direction: column;
    justify-content: start;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      flex-direction: row;
    }
  }
`;

const StyledHeading = motion.custom(styled.div`
  && {
    display: flex;
    flex-direction: column;
    padding-right: 4rem;
  }
`);

const StyledBody = motion.custom(styled.div`
  && {
    display: flex;
    flex-direction: column;
  }
`);

const StyledIcons = styled.div`
  && {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const About = () => {
  const { subheading, subheadingSecondary, title, body } = useAboutQuery();
  const { isIntroDone } = useContext(Context).state;
  // Required for animation - start after the splashScreen sequence is done
  const headingControls = useAnimation();
  const bodyControls = useAnimation();

  const headingRef = useRef();
  const bodyRef = useRef();

  const isHeadingOnScreen = useIsOnScreen(headingRef);
  const isBodyOnScreen = useIsOnScreen(bodyRef);

  useEffect(() => {
    if (isIntroDone) {
      if (isHeadingOnScreen) {
        headingControls.start({ opacity: 1, x: 0 });
      }

      if (isBodyOnScreen) {
        bodyControls.start({ opacity: 1, y: 0 });
      }
    }
  }, [
    bodyControls,
    headingControls,
    isBodyOnScreen,
    isHeadingOnScreen,
    isIntroDone,
  ]);

  const skillsIcons = !!icons && icons.skills;
  const learningIcons = !!icons && icons.learning;

  const hasSkillsIcons = !!skillsIcons && skillsIcons.length > 0;
  const hasLearningIcons = !!learningIcons && learningIcons.length > 0;

  return (
    <section id="about">
      <StyledContentWrapper>
        <StyledHeading
          animate={headingControls}
          initial={{ opacity: 0, x: -20 }}
          ref={headingRef}
        >
          <Divider />
          <h2>{title}</h2>
        </StyledHeading>
        <StyledBody
          animate={bodyControls}
          initial={{ opacity: 0, y: 20 }}
          ref={bodyRef}
        >
          <MDXRenderer>{body}</MDXRenderer>
          {hasSkillsIcons && (
            <Fragment>
              <h3>{subheading}</h3>
              <StyledIcons>
                {skillsIcons.map(({ name, subtitle }) => (
                  <Icon key={name} name={name} subtitle={subtitle} />
                ))}
              </StyledIcons>
            </Fragment>
          )}
          {hasLearningIcons && (
            <Fragment>
              <h3>{subheadingSecondary}</h3>
              <StyledIcons>
                {learningIcons.map(({ name, subtitle }) => (
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
