import { Box, styled } from '@mui/material';

export const OrderItemContainerWrapper = styled(Box)(() => ({
  position: 'relative',
  minHeight: '223px',
  width: '100%',
}));

export const OrderItemContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'auto',
  position: 'absolute',
  display: 'flex',
  flexDirection: 'row',
  columnGap: theme.spacing(2),
  top: '0px',
  left: '0px',
  borderRadius: '12px',
  borderColor: '#E5E7EB',
  borderWidth: '1px',
  borderStyle: 'solid',
  padding: theme.spacing(2),
  backgroundColor: 'white',
  '&:hover': {
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    zIndex: 10,
  },
}));

export const ListContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const NumberInputContainer = styled(Box)(() => ({ marginTop: 'auto' }));
