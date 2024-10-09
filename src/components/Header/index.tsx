import React from 'react';
import { useNavigate } from 'react-router';
import { AppBar, Typography, Box, Button } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Header: React.FC = () => {
  const navigate = useNavigate();
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
          <Typography variant="h6">CAR SHOP</Typography>
        </Box>
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
          <ShoppingCartIcon />
        </Button>
      </Box>
    </AppBar>
  );
};
