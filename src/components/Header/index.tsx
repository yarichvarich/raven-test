import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { AppBar, Typography, Box, Button, Badge } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { observer } from 'mobx-react-lite';
import useStore from '@src/store/useStore';
import { formatToCurrency } from '@src/utils';
import { useBreakpoints } from '@src/hooks';

export const Header: React.FC = observer(() => {
  const { overallQuantity, totalPrice } = useStore();

  const navigate = useNavigate();
  const location = useLocation();

  const { isSm } = useBreakpoints();

  return (
    <AppBar
      sx={{
        padding: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '900px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 1,
            cursor: 'pointer',
          }}
          onClick={() => {
            navigate('/');
          }}
        >
          <StoreIcon />
          {!isSm && (
            <Typography variant="h6">{`CAR SHOP${location.pathname === '/cart' ? ' / CART' : ' '}`}</Typography>
          )}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1 }}>
          <Typography>Total price: {formatToCurrency(totalPrice, 'usd')}</Typography>
          <Button
            variant="contained"
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 1,
              boxShadow: 'none',
              '&:hover': {
                boxShadow: 'none',
              },
            }}
            onClick={() => {
              navigate('/cart');
            }}
          >
            <Badge badgeContent={overallQuantity} max={9} color="warning">
              <ShoppingCartIcon />
            </Badge>
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
});
