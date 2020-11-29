import React from 'react';
import { Link } from 'gatsby';

import config from '../../../config';
import List from 'src/components/List/List';
import { StyledNav } from './Navbar.styled';

const { navLinks } = config;

const Navbar = () => {
  const { menu } = navLinks;
  return (
    <StyledNav role="navigation">
      <List role="menubar">
        {menu.map(({ id, name, url }) => (
          <li key={id} role="none">
            <Link className="nav-link" role="menuitem" to={url}>
              {name}
            </Link>
          </li>
        ))}
      </List>
    </StyledNav>
  );
};

export default Navbar;
