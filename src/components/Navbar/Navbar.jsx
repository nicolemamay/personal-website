import React from 'react';

import config from '../../../config';
import { StyledNavbarList, StyledNavLink } from './Navbar.styled';

const { navLinks } = config;

const Navbar = () => {
  const { menu } = navLinks;
  return (
    <nav role="navigation">
      <StyledNavbarList role="menubar">
        {menu.map(({ id, name, url }) => (
          <li key={id} role="none">
            <StyledNavLink role="menuitem" to={url}>
              {name}
            </StyledNavLink>
          </li>
        ))}
      </StyledNavbarList>
    </nav>
  );
};

export default Navbar;
