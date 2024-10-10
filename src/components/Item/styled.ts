import { Box, Typography, Button, ListItemText, styled } from '@mui/material';

export const ItemContainer = styled(Box)(() => ({
  width: '100%',
  position: 'relative',
  minHeight: '411px',
}));

export const ItemContent = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'auto',
  position: 'absolute',
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
    '.MuiListItemText-primary': {
      whiteSpace: 'normal',
    },
    '.item-title': {
      whiteSpace: 'normal',
    },
  },
}));

export const ItemTitle = styled(Typography)(() => ({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}));

export const CarClass = styled(ListItemText)(() => ({
  '.MuiListItemText-primary': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));

export const ItemButtom = styled(Button)(() => ({ width: '100%' }));
