import { motion } from 'framer-motion';
import styled from 'styled-components';

import ContentWrapper from 'src/styles/ContentWrapper';

export const StyledContentWrapper = styled(ContentWrapper)`
  && {
    display: flex;
    flex-direction: column;
    justify-content: start;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      flex-direction: row;
    }
  }
`;

export const StyledBody = motion.custom(styled.div`
  && {
    display: flex;
    flex-direction: column;
  }
`);

export const StyledHeading = motion.custom(styled.div`
  && {
    display: flex;
    flex-direction: column;
    padding-right: 4rem;
  }
`);

export const StyledIcons = styled.div`
  && {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
