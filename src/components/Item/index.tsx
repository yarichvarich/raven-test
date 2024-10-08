import { Box, Typography, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { ICar } from '@src/types';
import { Image } from '@src/components';
import React from 'react';
import { formatToCurrency } from '@src/utils';

interface IItemProps {
  carInfo: ICar;
}

export const Item: React.FC<IItemProps> = ({ carInfo }) => {
  return (
    <Box
      width="100%"
      sx={{
        borderRadius: '12px',
        overflow: 'hidden',
        borderColor: '#E5E7EB',
        borderWidth: '1px',
        borderStyle: 'solid',
        padding: 2,
      }}
    >
      <Image src={carInfo.image} style={{ borderRadius: '8px' }} />
      <Typography variant="h6">{carInfo.title}</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemIcon>
            <DirectionsCarIcon />
          </ListItemIcon>
          <ListItemText primary={carInfo.class} />
        </ListItem>
        <ListItem disablePadding>
          <ListItemIcon>
            <CalendarMonthIcon />
          </ListItemIcon>
          <ListItemText primary={carInfo.startProduction} />
        </ListItem>
        <ListItem disablePadding>
          <ListItemIcon>
            <LocalOfferIcon />
          </ListItemIcon>
          <ListItemText primary={formatToCurrency(carInfo.price, 'usd')} />
        </ListItem>
      </List>
      <Button variant="outlined">Add to cart</Button>
    </Box>
  );
};
