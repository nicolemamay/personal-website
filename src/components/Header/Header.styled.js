import { motion } from 'framer-motion';
import styled from 'styled-components';

import ContentWrapper from 'src/styles/ContentWrapper';

export const StyledHeader = motion.custom(styled.header`
  background: ${({ theme }) => theme.colors.background};
  height: ${({ theme }) => theme.headerHeight};
  width: 100%;
`);

export const StyledContentWrapper = styled(ContentWrapper)`
  && {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: space-between;
    margin-top: 0;
    width: 100%;
  }
`;
