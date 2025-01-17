import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledBackdrop = styled(motion.div)`
  && {
    background-color: ${({ theme }) => theme.colors.primary};
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 6;
  }
`;

export const StyledLogoWrapper = styled.div`
  && {
    align-items: center;
    display: flex;
    height: 64px;
    justify-content: center;
    position: relative;
  }
`;

export const StyledSplashScreen = styled(motion.div)`
  && {
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0%;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 5;
  }
`;
