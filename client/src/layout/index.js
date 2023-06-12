import React from 'react';
import { Box } from '@mui/material';

export const Row = ({ children, ...options }) => (
  <Box display="flex" justifyContent="center" alignItems="center" {...options}>
    {children}
  </Box>
);

export const Column = ({ children, ...options }) => (
  <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" {...options}>
    {children}
  </Box>
);

export const FullRow = ({ children, ...options }) => (
  <Row width="100%" {...options}>
    {children}
  </Row>
);

export const FullColumn = ({ children, ...options }) => (
  <Column height="100%" {...options}>
    {children}
  </Column>
);

export const Container = ({ children, ...options }) => (
  <FullColumn display="flex" width="100%" {...options}>
    {children}
  </FullColumn>
);