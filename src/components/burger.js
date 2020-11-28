import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
const StyledBurger = styled.button`
  z-index: 4;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  &:focus {
    outline: none;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
  div {
    width: 32px;
    height: 4px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 1px;
    transition: all 0.3s ease-in-out;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
      transform: ${({ isOpen }) =>
        isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }
    :nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const Burger = ({ isOpen, onClick }) => (
  <StyledBurger
    aria-controls="sidebar"
    isOpen={isOpen}
    onClick={() => onClick(!isOpen)}
  >
    <div />
    <div />
    <div />
  </StyledBurger>
);

Burger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Burger;
