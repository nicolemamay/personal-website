import styled from 'styled-components';

export const StyledBackdrop = styled.div`
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
`;

export const StyledContainer = styled.div`
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  outline: 0;
  z-index: 2;
  transition: all 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background};
  height: 100vh;
  width: 55%;
  padding: 176px 24px 32px 24px;
  margin-left: auto;
  a {
    color: ${({ theme }) => theme.colors.primary};
  }
  .nav-link {
    font-size: 1.5rem;
    letter-spacing: 0.18rem;
    line-height: 4rem;
  }
`;
