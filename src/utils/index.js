import Theme from '../styles/Theme';

// breakpoints.md needs to be cleaned and parsed since it is a string like '992px'
export const detectMobileAndTablet = (windowWidth) =>
  windowWidth < parseInt(Theme.breakpoints.md.match(/\d+/gi).join(''));

// detect server-side-rendering to fix bugs while gatsby build
export const isSSR = typeof window === 'undefined';
