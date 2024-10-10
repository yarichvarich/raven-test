import { Box, Button, styled } from '@mui/material';

export const LayoutContainerWrapper = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  overflow: 'hidden',
  height: '100%',
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(2),
  position: 'relative',
}));

export const LayoutContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  alignItems: 'center',
  maxWidth: '900px',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
}));

export const FillOrderButton = styled(Button)(() => ({
  position: 'absolute',
  bottom: '5%',
  right: '5%',
  zIndex: '11',
}));
