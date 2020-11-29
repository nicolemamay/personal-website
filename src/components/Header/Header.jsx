import React, { useState, useEffect, useContext, Fragment } from 'react';
import { Link } from 'gatsby';
import { useAnimation } from 'framer-motion';

import Context from 'src/context';
import { detectMobileAndTablet, isSSR } from 'src/utils';

import Burger from 'src/components/Burger/Burger';
import Logo from 'src/components/Logo/Logo';
import Navbar from 'src/components/Navbar/Navbar';
import Sidebar from 'src/components/Sidebar/Sidebar';

import { StyledContentWrapper, StyledHeader } from './Header.styled';

const Header = () => {
  const { isIntroDone } = useContext(Context).state;
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const isMobileOrTablet = detectMobileAndTablet(windowWidth);
  // Required for animation - start after the splashScreen sequence is done
  const controls = useAnimation();

  useEffect(() => {
    if (isIntroDone) {
      controls.start({ opacity: 1, y: 0, transition: { delay: 0.2 } });
    }
  }, [controls, isIntroDone]);

  // TODO: Create custom hook for window event
  useEffect(() => {
    let handleWindowSizeChange;
    // if (isSSR) is necessary to prevent error during the gatsby build
    if (!isSSR) {
      handleWindowSizeChange = () => setWindowWidth(window.innerWidth);
      // set initial innerWidth when component mounts
      setWindowWidth(window.innerWidth);
    }
    // Add event listener to update windowWidth in state
    window.addEventListener('resize', handleWindowSizeChange);
    return () => window.removeEventListener('resize', handleWindowSizeChange);
  }, [windowWidth]);

  return (
    <StyledHeader animate={controls} initial={{ opacity: 0, y: -10 }}>
      <StyledContentWrapper>
        <Link to="/" aria-label="home">
          <Logo color="primary" size="2rem" />
        </Link>
        {isMobileOrTablet && (
          <Fragment>
            <Burger isOpen={isOpen} onClick={setIsOpen} />
            <Sidebar id="sidebar" isOpen={isOpen} setIsOpen={setIsOpen} />
          </Fragment>
        )}
        {!isMobileOrTablet && <Navbar />}
      </StyledContentWrapper>
    </StyledHeader>
  );
};

export default Header;
