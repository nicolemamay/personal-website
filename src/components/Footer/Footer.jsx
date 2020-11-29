import React from 'react';
import { Link } from 'gatsby';

import Logo from 'src/components/Logo/Logo';

import { StyledContentWrapper, StyledFooter } from './Footer.styled';

const Footer = () => (
  <StyledFooter>
    <StyledContentWrapper>
      <Link to="/" aria-label="home">
        <Logo color="white" size="24px" />
      </Link>
    </StyledContentWrapper>
  </StyledFooter>
);

export default Footer;
