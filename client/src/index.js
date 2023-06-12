import React from 'react';
import { ThemeProvider } from '@mui/material';

import Routes from './routes';
import theme from './providers/ThemeProvider';
import { UserProvider } from './providers/UserProvider';

export default () => (
  <ThemeProvider theme={theme}>
    <UserProvider>
      <Routes />
    </UserProvider>
  </ThemeProvider>
)