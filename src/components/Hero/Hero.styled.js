import styled from 'styled-components';

export const StyledSubtitle = styled.p`
  && {
    max-width: 300px;
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      max-width: none;
    }
  }
`;
