import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import config from '../../../config';
import { StyledBackdrop, StyledContainer, StyledMenu } from './Sidebar.styled';

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
        <StyledMenu>
          {menu.map(({ id, name, url }) => (
            <Link
              className="nav-link"
              key={id}
              to={url}
              onClick={() => setIsOpen(!isOpen)}
            >
              {name}
            </Link>
          ))}
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
