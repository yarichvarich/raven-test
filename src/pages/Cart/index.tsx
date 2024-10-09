import React from 'react';
import { observer } from 'mobx-react-lite';
import { Box } from '@mui/material';

import useStore from '@src/store/useStore';
import { OrderItem } from '@src/components/OrderItem';

export const CartPage: React.FC = observer(() => {
  const { order } = useStore();
  return (
    <Box sx={{ width: '60%', gap: 2, display: 'flex', flexDirection: 'column' }}>
      {order.map(orderItem => (
        <OrderItem key={orderItem.carInfo.id} orderInfo={orderItem} />
      ))}
    </Box>
  );
});
