import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import ContentWrapper from '../styles/ContentWrapper';
import Logo from './logo';

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
  height: ${({ theme }) => theme.footerHeight};
  margin-top: 128px;
  width: 100%;
`;

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: start;
    margin: 0;
    width: 100%;
  }
`;

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
