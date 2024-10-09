import { Box, Button, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import useStore from '@src/store/useStore';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { formatToCurrency } from '@src/utils';

export const FormModal: React.FC = observer(() => {
  const { setFormModalOpen, totalPrice } = useStore();

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const [nameError, setNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const nameRegex = /^[a-zA-Z\s]{2,}$/;
  const addressRegex = /\S+/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = () => {
    const isNameValid = nameRegex.test(name);
    const isAddressValid = addressRegex.test(address);
    const isEmailValid = emailRegex.test(email);

    setNameError(!isNameValid);
    setAddressError(!isAddressValid);
    setEmailError(!isEmailValid);

    if (isNameValid && isAddressValid && isEmailValid) {
      console.log('Form submitted successfully!');
    }
  };

  return (
    <Box
      sx={{
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
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          rowGap: 2,
          padding: 3,
          width: '100%',
          height: '100%',
        }}
      >
        <CloseIcon
          sx={{ position: 'absolute', top: '24px', right: '24px' }}
          onClick={() => setFormModalOpen(false)}
        />
        <Typography variant="h6">Order form</Typography>
        <TextField
          size="small"
          label="Name"
          placeholder="Your name"
          value={name}
          onChange={e => setName(e.target.value)}
          error={nameError}
          helperText={
            nameError ? 'Name must be at least 2 characters long and contain only letters' : ''
          }
        />
        <TextField
          size="small"
          label="Address"
          placeholder="Your address"
          value={address}
          onChange={e => setAddress(e.target.value)}
          error={addressError}
          helperText={addressError ? 'Address is required' : ''}
        />
        <TextField
          size="small"
          label="Email"
          placeholder="Your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          error={emailError}
          helperText={emailError ? 'Enter a valid email address' : ''}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography>Total price: {formatToCurrency(totalPrice, 'usd')}</Typography>
          <Button variant="outlined" onClick={handleSubmit}>
            Confirm order
          </Button>
        </Box>
      </Box>
    </Box>
  );
});
