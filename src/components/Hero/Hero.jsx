import React, { useContext, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import Context from 'src/context';
import useHeroQuery from 'src/hooks/useHeroQuery';
import ContentWrapper from 'src/styles/ContentWrapper';

import SplashScreen from 'src/components/SplashScreen/SplashScreen';

import { StyledSubtitle } from './Hero.styled';

const Hero = () => {
  const { greetings, subtitle, title } = useHeroQuery();
  const { isIntroDone } = useContext(Context).state;
  // Required for animation - start after the splashScreen sequence is done
  const controls = useAnimation();

  useEffect(() => {
    if (isIntroDone)
      controls.start({ opacity: 1, y: 0, transition: { delay: 0.4 } });
  }, [isIntroDone, controls]);

  return (
    <section>
      {!isIntroDone && <SplashScreen />}
      <ContentWrapper>
        <motion.div animate={controls} initial={{ opacity: 0, y: 20 }}>
          <h1>
            {greetings}
            <br />
            {title}
          </h1>
          <StyledSubtitle className="text-secondary">{subtitle}</StyledSubtitle>
        </motion.div>
      </ContentWrapper>
    </section>
  );
};

export default Hero;
