import React from 'react';
import { Outlet } from 'react-router';
import { Box } from '@mui/material';

import { Header } from '@src/components/Header';

interface ILayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<ILayoutProps> = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          overflowX: 'hidden',
          overflowY: 'scroll',
          height: '100%',
          padding: 6,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            alignItems: 'center',
            maxWidth: '900px',
            width: '100%',
            height: '100%',
            // padding: 6,
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
};
