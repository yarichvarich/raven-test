import { IOrderItem } from '@src/types';
import React from 'react';

import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { observer } from 'mobx-react-lite';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Image } from '@src/components';
import { formatToCurrency } from '@src/utils';

interface IOrderItemProps {
  orderInfo: IOrderItem;
}

export const OrderItem: React.FC<IOrderItemProps> = observer(({ orderInfo }) => {
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
          <Typography
            variant="h6"
            sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
            className="item-title"
          >
            {orderInfo.carInfo.title}
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemIcon>
                <DirectionsCarIcon />
              </ListItemIcon>
              <ListItemText
                primary={orderInfo.carInfo.class}
                sx={{
                  '.MuiListItemText-primary': {
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  },
                }}
              />
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
        </Box>
      </Box>
    </Box>
  );
});
