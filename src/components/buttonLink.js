import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButtonLink = styled.a`
  && {
    width: auto;
    height: auto;
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 0.125rem solid ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.background};
    transition: 20ms ease-out;
    font-size: 1rem;
    padding: 0.5rem 1.5rem;
    margin-right: .5rem;
    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      color: #ffffff;
    }
`;

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
