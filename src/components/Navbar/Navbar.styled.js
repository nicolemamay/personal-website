import styled from 'styled-components';
import { Link } from 'gatsby';

import List from 'src/components/List/List';

export const StyledNavbarList = styled(List)`
  && {
    display: none;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      align-items: center;
      background: ${({ theme }) => theme.colors.background};
      display: flex;
      justify-content: space-between;
      width: 272px;
    }
  }
`;

export const StyledNavLink = styled(Link)`
  && {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.25rem;
    line-height: 2rem;
    text-align: center;
    text-transform: uppercase;
    position: relative;
    &::before {
      background-color: ${({ theme }) => theme.colors.tertiary};
      bottom: -2px;
      content: '';
      height: 2px;
      position: absolute;
      transition: 200ms ease-out;
      width: 0;
    }
    &:hover::before {
      width: 100%;
    }
  }
`;
