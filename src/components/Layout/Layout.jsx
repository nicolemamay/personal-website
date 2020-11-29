import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Context from 'src/context';
import Theme from 'src/styles/Theme';
import GlobalStyle from 'src/styles/GlobalStyle';

import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';

import { StyledLayoutWrapper } from './Layout.styled';

// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]');
}

const Layout = ({ children, doUseSplashScreen }) => {
  // if splashScreen = false, we set isIntroDone = true to skip the splashScreen
  const [state, setState] = useState({
    isIntroDone: doUseSplashScreen ? false : true,
  });

  return (
    <StyledLayoutWrapper>
      <Context.Provider value={{ state, setState }}>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </Context.Provider>
    </StyledLayoutWrapper>
  );
};

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.node,
  doUseSplashScreen: PropTypes.bool.isRequired,
};

export default Layout;
