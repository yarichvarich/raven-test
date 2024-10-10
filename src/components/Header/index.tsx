import React from 'react';
import { observer } from 'mobx-react-lite';
import { useLocation, useNavigate } from 'react-router';
import { Typography, Badge, MenuItem } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useStore, useBreakpoints, useCurrency } from '@src/hooks';
import { supportedCurrencies } from '@src/constants';

import {
  CartLink,
  HeaderCartInfo,
  HeaderContainer,
  HeaderInner,
  HeaderTittleContainer,
  CurrencySelect,
} from './styled';

export const Header: React.FC = observer(() => {
  const { overallQuantity, totalPrice, currentCurrency, setCurrentCurrency } = useStore();

  const { formatCurrency } = useCurrency();
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
          <CurrencySelect
            value={currentCurrency.label}
            onChange={e => {
              const currency = supportedCurrencies.find(curr => curr.label === e.target.value);
              if (currency) {
                setCurrentCurrency(currency);
              }
            }}
          >
            {supportedCurrencies.map(currency => (
              <MenuItem value={currency.label}>{currency.label}</MenuItem>
            ))}
          </CurrencySelect>
          <Typography>Total price: {formatCurrency(totalPrice)}</Typography>
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
