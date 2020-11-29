import React from 'react';
import { Link } from 'gatsby';

import config from '../../../config';
import { StyledNav } from './Navbar.styled';

const { navLinks } = config;

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
