import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledBackdrop = styled.div`
  && {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
    transition: all 0.3s ease-in-out;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      display: none;
    }
  }
`;

export const StyledContainer = styled.div`
  && {
    bottom: 0;
    display: block;
    height: 100vh;
    outline: 0;
    position: fixed;
    right: 0;
    top: 0;
    transform: ${({ isOpen }) =>
      isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: all 0.3s ease-in-out;
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    width: 100%;
    z-index: 2;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      display: none;
    }
  }
`;

export const StyledMenu = styled.nav`
  && {
    background: ${({ theme }) => theme.colors.background};
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin-left: auto;
    padding: 176px 24px 32px 24px;
    width: 55%;
  }
`;

export const StyledMenuLink = styled(Link)`
  && {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
    letter-spacing: 0.18rem;
    line-height: 4rem;
  }
`;
