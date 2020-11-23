import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    width: 100%;
    height: 100%;
  }

  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #ffffff;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    font-family: ${({ theme }) => theme.fonts.primary};
    line-height: 1.5rem;
    font-weight: 400;
    text-rendering: optimizeLegibility;
    &.blur {
        overflow: hidden;
        #___gatsby #main-content > * {
          filter: blur(5px) ;
          transition: all .3s ease-out;
          pointer-events: none;
          user-select: none;
        }
      }
    }
    &.splashScreen {
      position: fixed;
      overflow: hidden;
    }
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: 300;
    font-size: 1.25rem;
    line-height: 2rem;
  }

  h1 {
    font-size: 3rem;
    line-height: 4rem;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 400;
    margin: 0;
    color: ${({ theme }) => theme.colors.primary};
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 5rem;
      line-height: 6rem;
    }
  }

  h2 {
    font-size: 2rem;
    line-height: 3rem;
    letter-spacing: .1rem;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 300;
    margin: 0;
    color: ${({ theme }) => theme.colors.primary};
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 3rem;
      line-height: 4rem;
    }
  }

  h3 {
    font-size: 1.75rem;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 400;
    line-height: 2.25rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 3rem;
  }

  h4 {
    font-size: 1rem;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 400;
    line-height: 1.5rem;
    font-weight: 400;
  }
`;

export default GlobalStyle;
