import { AppBar, Box, Button, Select, styled } from '@mui/material';

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

export const CurrencySelect = styled(Select)(({ theme }) => ({
  height: '36px',
  color: 'white',
  '.MuiSelect-icon': { color: 'white' },
  transition: theme.transitions.create(['background-color', 'border-color'], {
    duration: theme.transitions.duration.short,
    easing: theme.transitions.easing.easeInOut,
  }),
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  border: 'none',
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '&.MuiInputBase-root:before': {
    borderBottom: 'none',
  },
  '&.MuiInputBase-root:after': {
    borderBottom: 'none',
  },
}));
