import React, { memo } from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { ICar } from '@src/types';
import { Image } from '@src/components';
import { formatToCurrency } from '@src/utils';

import { ItemButtom, CarClass, ItemContainer, ItemContent, ItemTitle } from './styled';

interface IItemProps {
  carInfo: ICar;
  addItemToCart: (carInfo: ICar) => void;
}

export const Item: React.FC<IItemProps> = memo(({ carInfo, addItemToCart }) => {
  return (
    <ItemContainer>
      <ItemContent>
        <Image src={carInfo.image} style={{ borderRadius: '8px' }} />
        <ItemTitle variant="h6" className="item-title">
          {carInfo.title}
        </ItemTitle>
        <List>
          <ListItem disablePadding>
            <ListItemIcon>
              <DirectionsCarIcon />
            </ListItemIcon>
            <CarClass primary={carInfo.class} />
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
        <ItemButtom variant="outlined" onClick={() => addItemToCart(carInfo)}>
          Add to cart
        </ItemButtom>
      </ItemContent>
    </ItemContainer>
  );
});
