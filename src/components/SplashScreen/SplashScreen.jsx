import React, { useEffect, useContext } from 'react';
import Helmet from 'react-helmet';
import { motion, useAnimation } from 'framer-motion';

import Context from 'src/context';
import Logo from 'src/components/Logo/Logo';

import { StyledSplashScreen } from './SplashScreen.styled';

const SplashScreen = () => {
  const { state, setState } = useContext(Context);

  const backgroundControls = useAnimation();
  const backdropControls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await backgroundControls.start({ opacity: 1 });
      await backdropControls.start({
        height: '0',
        transition: { delay: 0.8 },
      });
      await backgroundControls.start({
        opacity: 0,
        transition: { delay: 0.6 },
      });
      setState({ ...state, isIntroDone: true });
    };
    sequence();
  }, [backgroundControls, backdropControls, setState, state]);

  return (
    <StyledSplashScreen animate={backgroundControls} initial={{ opacity: 0 }}>
      {/* Add splashScreen class to body (prevents scrolling during splashScreen) */}
      <Helmet
        bodyAttributes={{ class: !state.isIntroDone ? 'splashScreen' : '' }}
      />
      <div className="logo-wrapper">
        <motion.div
          className="backdrop"
          initial={{ height: '100%' }}
          animate={backdropControls}
        />
        <Logo color="white" size="48px" />
      </div>
    </StyledSplashScreen>
  );
};

export default SplashScreen;
