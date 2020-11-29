import React from 'react';
import PropTypes from 'prop-types';

import { StyledButtonLink } from './ButtonLink.styled';

const ButtonLink = ({ children, url, ...props }) => (
  <StyledButtonLink
    href={url}
    rel="nofollow noopener noreferrer"
    target="_blank"
    {...props}
  >
    {children}
  </StyledButtonLink>
);

ButtonLink.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ButtonLink;
