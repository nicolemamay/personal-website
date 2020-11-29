import React from 'react';
import { ThemeProvider } from 'styled-components';

import Theme from 'src/styles/Theme';

const ThemeProviderMock = ({ children }) => (
  <ThemeProvider theme={Theme}>{children}</ThemeProvider>
);

export default ThemeProviderMock;
