import React from 'react';
import { observer } from 'mobx-react-lite';
import { Box, Typography } from '@mui/material';

import useStore from '@src/store/useStore';
import { OrderItem } from '@src/components/OrderItem';

export const CartPage: React.FC = observer(() => {
  const { order } = useStore();
  return (
    <>
      {order.length > 0 ? (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            gap: 2,
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'scroll',
          }}
        >
          {order.map(orderItem => (
            <OrderItem key={orderItem.carInfo.id} orderInfo={orderItem} />
          ))}
        </Box>
      ) : (
        <Box
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}
        >
          <Typography variant="h6">Cart is currently empty</Typography>
        </Box>
      )}
    </>
  );
});
