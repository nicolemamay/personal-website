import styled from 'styled-components';

const ContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.pageWidth};
  margin: 4rem auto 0 auto;
  padding: 0 1.5rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 2rem;
  }
`;
export default ContentWrapper;
