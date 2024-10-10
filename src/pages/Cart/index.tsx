import React from 'react';
import { observer } from 'mobx-react-lite';
import { Typography } from '@mui/material';

import { useCurrency, useStore } from '@src/hooks';
import { OrderItem } from '@src/components/OrderItem';

import { EmptyCartContainer, OrdersContainer } from './styled';

export const CartPage: React.FC = observer(() => {
  const { order, changeCarQuantity } = useStore();
  const { formatCurrency } = useCurrency();

  return (
    <>
      {order.length > 0 ? (
        <OrdersContainer>
          {order.map(orderItem => (
            <OrderItem
              key={orderItem.carInfo.id}
              orderInfo={orderItem}
              displayedPrice={formatCurrency(orderItem.carInfo.price)}
              changeCarQuantity={changeCarQuantity}
            />
          ))}
        </OrdersContainer>
      ) : (
        <EmptyCartContainer>
          <Typography variant="h6">Cart is currently empty</Typography>
        </EmptyCartContainer>
      )}
    </>
  );
});
