import { Box, Button, styled } from '@mui/material';

export const NumberInputContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  columnGap: theme.spacing(1),
}));

export const NumberInputButton = styled(Button)(({ theme }) => ({
  minWidth: 0,
  width: theme.spacing(3),
  height: theme.spacing(3),
  borderRadius: '20px',
}));
