import styled from 'styled-components';

export const StyledButtonLink = styled.a`
  && {
    background: ${({ theme }) => theme.colors.background};
    border: 0.125rem solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius};
    font-size: 1rem;
    height: auto;
    margin-right: 8px;
    padding: 8px 24px;
    transition: 20ms ease-out;
    width: auto;
    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      color: #ffffff;
    }
`;
