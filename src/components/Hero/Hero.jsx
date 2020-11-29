import React, { useContext, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';

import Context from 'src/context';
import useHeroQuery from 'src/hooks/useHeroQuery';
import ContentWrapper from 'src/styles/ContentWrapper';

import SplashScreen from 'src/components/SplashScreen/SplashScreen';

import { StyledSubtitle } from './Hero.styled';

export const PureHero = ({ greetings, isIntroDone, subtitle, title }) => {
  // Required for animation - start after the splashScreen sequence is done
  const controls = useAnimation();

  useEffect(() => {
    if (isIntroDone) {
      controls.start({ opacity: 1, y: 0, transition: { delay: 0.4 } });
    }
  }, [isIntroDone, controls]);

  return (
    <section>
      {!isIntroDone && <SplashScreen />}
      {isIntroDone && (
        <ContentWrapper>
          <motion.div animate={controls} initial={{ opacity: 0, y: 20 }}>
            <h1>
              {greetings}
              <br />
              {title}
            </h1>
            <StyledSubtitle className="text-secondary">
              {subtitle}
            </StyledSubtitle>
          </motion.div>
        </ContentWrapper>
      )}
    </section>
  );
};

PureHero.propTypes = {
  greetings: PropTypes.string.isRequired,
  isIntroDone: PropTypes.bool.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const Hero = () => {
  const { greetings, subtitle, title } = useHeroQuery();
  const { isIntroDone } = useContext(Context).state;

  return (
    <PureHero
      greetings={greetings}
      subtitle={subtitle}
      title={title}
      isIntroDone={isIntroDone}
    />
  );
};

export default Hero;
