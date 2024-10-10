import { Box, styled } from '@mui/material';

export const OrdersContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  gap: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'scroll',
}));

export const EmptyCartContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
}));
