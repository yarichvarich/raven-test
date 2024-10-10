import CloseIcon from '@mui/icons-material/Close';
import { Box, styled } from '@mui/material';

export const FormModalContainer = styled(Box)(() => ({
  backgroundColor: 'white',
  position: 'absolute',
  maxWidth: '600px',
  width: '100%',
  borderRadius: '12px',
  borderColor: '#E5E7EB',
  borderWidth: '1px',
  borderStyle: 'solid',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}));

export const FormModalContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  rowGap: theme.spacing(2),
  padding: theme.spacing(3),
  width: '100%',
  height: '100%',
}));

export const FormModalCloseIcon = styled(CloseIcon)(() => ({
  position: 'absolute',
  top: '24px',
  right: '24px',
}));

export const FormModalBottom = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}));
