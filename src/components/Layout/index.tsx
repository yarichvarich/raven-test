import React from 'react';
import { Outlet, useLocation } from 'react-router';
import { Box, Button, Modal } from '@mui/material';

import { Header, FormModal } from '@src/components';
import { observer } from 'mobx-react-lite';
import useStore from '@src/store/useStore';

interface ILayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<ILayoutProps> = observer(() => {
  const { totalPrice, formModalOpened, setFormModalOpen } = useStore();
  const location = useLocation();

  return (
    <>
      <Header />
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          overflow: 'hidden',
          height: '100%',
          paddingTop: 6,
          paddingBottom: 2,
          position: 'relative',
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
            overflow: 'hidden',
          }}
        >
          <Outlet />
        </Box>
        {totalPrice !== 0 && location.pathname === '/cart' && !formModalOpened && (
          <Button
            variant="contained"
            size="large"
            sx={{ position: 'absolute', bottom: '5%', right: '5%', zIndex: '11' }}
            onClick={() => setFormModalOpen(true)}
          >
            FILL ORDER!
          </Button>
        )}
      </Box>
      <Modal open={formModalOpened} onClose={() => setFormModalOpen(false)}>
        <FormModal />
      </Modal>
    </>
  );
});
