import styled from 'styled-components';

// https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
export const StyledBurger = styled.button`
  && {
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 32px;
    justify-content: space-around;
    padding: 0;
    width: 32px;
    z-index: 4;
    &:focus {
      outline: none;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      display: none;
    }
    .burger-layer {
      background: ${({ theme }) => theme.colors.primary};
      border-radius: 1px;
      height: 4px;
      width: 32px;
      position: relative;
      transform-origin: 1px;
      transition: all 0.3s ease-in-out;
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
  }
`;
