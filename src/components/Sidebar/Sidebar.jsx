import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import config from '../../../config';
import List from 'src/components/List/List';
import {
  StyledBackdrop,
  StyledContainer,
  StyledMenu,
  StyledMenuLink,
} from './Sidebar.styled';

const { navLinks } = config;

const Sidebar = ({ isOpen, setIsOpen }) => {
  const { menu } = navLinks;

  return (
    <Fragment>
      <StyledContainer
        isOpen={isOpen}
        aria-hidden={!isOpen}
        tabIndex={isOpen ? 1 : -1}
      >
        <StyledMenu role="navigation">
          <List id="sidebar-menu" role="menubar">
            {menu.map(({ id, name, url }) => (
              <li key={id} role="none">
                <StyledMenuLink
                  role="menuitem"
                  to={url}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {name}
                </StyledMenuLink>
              </li>
            ))}
          </List>
        </StyledMenu>
      </StyledContainer>
      <StyledBackdrop isOpen={isOpen} />
    </Fragment>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default Sidebar;
