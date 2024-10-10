import { AppBar, Box, Button, styled } from '@mui/material';

export const HeaderContainer = styled(AppBar)(({ theme }) => ({
  padding: theme.spacing(1),
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
}));

export const HeaderInner = styled(Box)(() => ({
  width: '900px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const HeaderTittleContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1),
  cursor: 'pointer',
}));

export const HeaderCartInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

export const CartLink = styled(Button)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1),
  boxShadow: 'none',
  '&:hover': {
    boxShadow: 'none',
  },
}));
