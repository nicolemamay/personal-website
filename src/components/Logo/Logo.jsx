import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import config from '../../../config';

const { siteShortTitle } = config;

const StyledLogo = styled.div`
  position: relative;
  z-index: 3;
  font-size: ${({ size }) => (size ? size : '1.75rem')};
  font-weight: 900;
  color: ${({ theme, color }) => theme.colors[color] || color};
  /* Disable effects when sidebar is open */
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
`;

const Logo = ({ color, size }) => (
  <StyledLogo color={color} size={size}>
    {siteShortTitle}
  </StyledLogo>
);

Logo.defaultProps = {
  color: '',
  size: '',
};

Logo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

export default Logo;
