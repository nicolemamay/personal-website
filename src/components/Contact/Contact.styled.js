import { motion } from 'framer-motion';
import styled from 'styled-components';

import ContentWrapper from 'src/styles/ContentWrapper';

export const StyledAvatar = motion.custom(styled.div`
  && .avatar {
    border-radius: 50%;
    filter: grayscale(70%) contrast(1) brightness(100%);
    max-height: 200px;
    max-width: 100%;
    width: 200px;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      margin-bottom: 0;
      max-height: 325px;
      width: 325px;
    }
  }
`);

export const StyledBody = motion.custom(styled.div`
  && {
    display: flex;
    flex-direction: column;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      margin: 0 64px;
    }
  }
`);

export const StyledContentWrapper = styled(ContentWrapper)`
  && {
    display: flex;
    flex-direction: column;
    justify-content: start;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      align-items: center;
      flex-direction: row;
    }
  }
`;

export const StyledSocial = styled.div`
  && {
    display: flex;
    flex-direction: row;
  }
`;
