import React, { Fragment, useContext, useEffect, useRef } from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { useAnimation } from 'framer-motion';

import config from '../../../config';
import Context from 'src/context';
import useAboutQuery from 'src/hooks/useAboutQuery';
import useIsOnScreen from 'src/hooks/useIsOnScreen';

import Icon from 'src/components/Icon/Icon';
import Divider from 'src/components/Divider/Divider';

import {
  StyledContentWrapper,
  StyledBody,
  StyledHeading,
  StyledIcons,
} from './About.styled';

const { icons } = config;

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
