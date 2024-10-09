import { Box, Typography, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { observer } from 'mobx-react-lite';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { ICar } from '@src/types';
import { Image } from '@src/components';
import React from 'react';
import { formatToCurrency } from '@src/utils';
import useStore from '@src/store/useStore';

interface IItemProps {
  carInfo: ICar;
}

export const Item: React.FC<IItemProps> = observer(({ carInfo }) => {
  const { addItemToCart } = useStore();

  return (
    <Box width="100%" sx={{ position: 'relative', minHeight: '411px' }}>
      <Box
        width="100%"
        sx={{
          height: 'auto',
          position: 'absolute',
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
            '.MuiListItemText-primary': {
              whiteSpace: 'normal',
            },
            '.item-title': {
              whiteSpace: 'normal',
            },
          },
        }}
      >
        <Image src={carInfo.image} style={{ borderRadius: '8px' }} />
        <Typography
          variant="h6"
          sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
          className="item-title"
        >
          {carInfo.title}
        </Typography>
        <List>
          <ListItem disablePadding>
            <ListItemIcon>
              <DirectionsCarIcon />
            </ListItemIcon>
            <ListItemText
              primary={carInfo.class}
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
            <ListItemText primary={carInfo.startProduction} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <LocalOfferIcon />
            </ListItemIcon>
            <ListItemText primary={formatToCurrency(carInfo.price, 'usd')} />
          </ListItem>
        </List>
        <Button variant="outlined" sx={{ width: '100%' }} onClick={() => addItemToCart(carInfo)}>
          Add to cart
        </Button>
      </Box>
    </Box>
  );
});
