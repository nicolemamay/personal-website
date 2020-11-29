import React from 'react';
import PropTypes from 'prop-types';

import config from '../../../config';
import { StyledLogo } from './Logo.styled';

const { siteShortTitle } = config;

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
