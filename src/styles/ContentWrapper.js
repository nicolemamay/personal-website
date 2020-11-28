import styled from 'styled-components';

const ContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.pageWidth};
  margin: 64px auto 64px auto;
  padding: 0 24px;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 32px;
  }
`;
export default ContentWrapper;
