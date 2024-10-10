import React from 'react';
import { Outlet, useLocation } from 'react-router';
import { observer } from 'mobx-react-lite';
import { Modal } from '@mui/material';

import { Header, FormModal } from '@src/components';
import useStore from '@src/hooks/useStore';

import { FillOrderButton, LayoutContainer, LayoutContainerWrapper } from './styled';

interface ILayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<ILayoutProps> = observer(() => {
  const { totalPrice, formModalOpened, setFormModalOpen } = useStore();
  const location = useLocation();

  return (
    <>
      <Header />
      <LayoutContainerWrapper>
        <LayoutContainer>
          <Outlet />
        </LayoutContainer>
        {totalPrice !== 0 && location.pathname === '/cart' && !formModalOpened && (
          <FillOrderButton variant="contained" size="large" onClick={() => setFormModalOpen(true)}>
            FILL ORDER!
          </FillOrderButton>
        )}
      </LayoutContainerWrapper>
      <Modal open={formModalOpened} onClose={() => setFormModalOpen(false)}>
        <FormModal />
      </Modal>
    </>
  );
});
