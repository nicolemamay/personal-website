import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import config from '../../config';

const { navLinks } = config;

const StyledNav = styled.nav`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 17rem;
    background: ${({ theme }) => theme.colors.background};
    a {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  .nav-link {
    font-size: 1rem;
    letter-spacing: 0.12rem;
    line-height: 2rem;
    text-align: center;
    text-transform: uppercase;
    position: relative;
    &::before {
      transition: 200ms ease-out;
      height: 0.1rem;
      content: '';
      position: absolute;
      background-color: ${({ theme }) => theme.colors.tertiary};
      width: 0%;
      bottom: -0.1rem;
    }
    &:hover::before {
      width: 100%;
    }
  }
`;

const Navbar = () => {
  const { menu } = navLinks;
  return (
    <StyledNav>
      {menu.map(({ id, name, url }) => (
        <Link className="nav-link" key={id} to={url}>
          {name}
        </Link>
      ))}
    </StyledNav>
  );
};

export default Navbar;
