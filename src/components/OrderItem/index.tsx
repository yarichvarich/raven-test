import React, { memo } from 'react';
import { Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { IOrderItem } from '@src/types';
import { Image, NumberInput } from '@src/components';
import { formatToCurrency } from '@src/utils';

import {
  ListContainer,
  NumberInputContainer,
  OrderItemContainer,
  OrderItemContainerWrapper,
} from './styled';

interface IOrderItemProps {
  orderInfo: IOrderItem;
  changeCarQuantity: (carId: number, value: number) => void;
}

export const OrderItem: React.FC<IOrderItemProps> = memo(({ orderInfo, changeCarQuantity }) => {
  return (
    <OrderItemContainerWrapper>
      <OrderItemContainer>
        <Image src={orderInfo.carInfo.image} style={{ borderRadius: '8px', width: '40%' }} />
        <ListContainer>
          <Typography variant="h6">{orderInfo.carInfo.title}</Typography>
          <List>
            <ListItem disablePadding>
              <ListItemIcon>
                <DirectionsCarIcon />
              </ListItemIcon>
              <ListItemText primary={orderInfo.carInfo.class} />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CalendarMonthIcon />
              </ListItemIcon>
              <ListItemText primary={orderInfo.carInfo.startProduction} />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <LocalOfferIcon />
              </ListItemIcon>
              <ListItemText primary={formatToCurrency(orderInfo.carInfo.price, 'usd')} />
            </ListItem>
          </List>
          <NumberInputContainer>
            <NumberInput
              min={0}
              max={100000}
              value={orderInfo.quantity}
              handleChange={newValue => {
                changeCarQuantity(orderInfo.carInfo.id, newValue);
              }}
            />
          </NumberInputContainer>
        </ListContainer>
      </OrderItemContainer>
    </OrderItemContainerWrapper>
  );
});
