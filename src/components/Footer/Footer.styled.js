import styled from 'styled-components';
import ContentWrapper from 'src/styles/ContentWrapper';

export const StyledContentWrapper = styled(ContentWrapper)`
  && {
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: start;
    margin-top: 0;
    margin-bottom: 0;
    width: 100%;
  }
`;

export const StyledFooter = styled.footer`
  && {
    background: ${({ theme }) => theme.colors.primary};
    height: ${({ theme }) => theme.footerHeight};
    margin-top: 128px;
    width: 100%;
  }
`;
