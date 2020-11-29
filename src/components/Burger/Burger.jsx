import React from 'react';
import PropTypes from 'prop-types';

import { StyledBurger } from './Burger.styled';

const Burger = ({ isOpen, onClick }) => (
  <StyledBurger
    aria-controls="sidebar"
    isOpen={isOpen}
    onClick={() => onClick(!isOpen)}
  >
    <div className="burger-layer" />
    <div className="burger-layer" />
    <div className="burger-layer" />
  </StyledBurger>
);

Burger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Burger;
