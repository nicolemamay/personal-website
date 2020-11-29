import styled from 'styled-components';

export const StyledLogo = styled.div`
  && {
    color: ${({ theme, color }) => theme.colors[color] || color};
    font-size: ${({ size }) => (size ? size : '1.75rem')};
    font-weight: 900;
    position: relative;
    z-index: 3;
    /* Disable effects when sidebar is open */
    filter: none !important;
    pointer-events: auto !important;
    user-select: auto !important;
  }
`;
