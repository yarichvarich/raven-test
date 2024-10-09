import { IOrderItem } from '@src/types';
import React from 'react';

import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { observer } from 'mobx-react-lite';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Image, NumberInput } from '@src/components';
import { formatToCurrency } from '@src/utils';
import useStore from '@src/store/useStore';

interface IOrderItemProps {
  orderInfo: IOrderItem;
}

export const OrderItem: React.FC<IOrderItemProps> = observer(({ orderInfo }) => {
  const { changeCarQuantity } = useStore();
  return (
    <Box width="100%" sx={{ position: 'relative', minHeight: '223px' }}>
      <Box
        width="100%"
        sx={{
          height: 'auto',
          position: 'absolute',
          display: 'flex',
          flexDirection: 'row',
          columnGap: 2,
          top: '0px',
          left: '0px',
          borderRadius: '12px',
          borderColor: '#E5E7EB',
          borderWidth: '1px',
          borderStyle: 'solid',
          padding: 2,
          backgroundColor: 'white',
          '&:hover': {
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
            zIndex: 10,
          },
        }}
      >
        <Image src={orderInfo.carInfo.image} style={{ borderRadius: '8px', width: '40%' }} />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
          <Box sx={{ marginTop: 'auto' }}>
            <NumberInput
              min={0}
              max={100000}
              value={orderInfo.quantity}
              handleChange={newValue => {
                changeCarQuantity(orderInfo.carInfo.id, newValue);
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
});
