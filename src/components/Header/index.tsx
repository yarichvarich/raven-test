import React from 'react';
import { observer } from 'mobx-react-lite';
import { useLocation, useNavigate } from 'react-router';
import { Typography, Badge } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import useStore from '@src/hooks/useStore';
import { formatToCurrency } from '@src/utils';
import { useBreakpoints } from '@src/hooks';

import {
  CartLink,
  HeaderCartInfo,
  HeaderContainer,
  HeaderInner,
  HeaderTittleContainer,
} from './styled';

export const Header: React.FC = observer(() => {
  const { overallQuantity, totalPrice } = useStore();

  const navigate = useNavigate();
  const location = useLocation();

  const { isSm } = useBreakpoints();

  return (
    <HeaderContainer>
      <HeaderInner>
        <HeaderTittleContainer onClick={() => navigate('/')}>
          <StoreIcon />
          {!isSm && (
            <Typography variant="h6">{`CAR SHOP${location.pathname === '/cart' ? ' / CART' : ' '}`}</Typography>
          )}
        </HeaderTittleContainer>
        <HeaderCartInfo>
          <Typography>Total price: {formatToCurrency(totalPrice, 'usd')}</Typography>
          <CartLink
            variant="contained"
            onClick={() => {
              navigate('/cart');
            }}
          >
            <Badge badgeContent={overallQuantity} max={9} color="warning">
              <ShoppingCartIcon />
            </Badge>
          </CartLink>
        </HeaderCartInfo>
      </HeaderInner>
    </HeaderContainer>
  );
});
