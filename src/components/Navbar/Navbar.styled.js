import styled from 'styled-components';

export const StyledNav = styled.nav`
  && {
    display: none;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 272px;
      background: ${({ theme }) => theme.colors.background};
      a {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
    .nav-link {
      font-size: 1rem;
      letter-spacing: 0.25rem;
      line-height: 2rem;
      text-align: center;
      text-transform: uppercase;
      position: relative;
      &::before {
        transition: 200ms ease-out;
        height: 2px;
        content: '';
        position: absolute;
        background-color: ${({ theme }) => theme.colors.tertiary};
        width: 0%;
        bottom: -2px;
      }
      &:hover::before {
        width: 100%;
      }
    }
  }
`;