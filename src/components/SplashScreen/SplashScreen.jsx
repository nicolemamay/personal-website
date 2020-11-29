import React, { useEffect, useContext } from 'react';
import Helmet from 'react-helmet';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';

import Context from 'src/context';

import Logo from 'src/components/Logo/Logo';

const StyledSplashScreen = styled(motion.div)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0%;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
  .logo-wrapper {
    align-items: center;
    display: flex;
    height: 4rem;
    justify-content: center;
    position: relative;
  }
  .backdrop {
    background-color: ${({ theme }) => theme.colors.primary};
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 6;
  }
`;

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
