import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';

import useStore from '@src/hooks/useStore';
import { formatToCurrency } from '@src/utils';
import { addressRegex, emailRegex, nameRegex } from '@src/constants';

import {
  FormModalBottom,
  FormModalCloseIcon,
  FormModalContainer,
  FormModalContent,
} from './styled';

export const FormModal: React.FC = observer(() => {
  const { setFormModalOpen, totalPrice } = useStore();

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const [nameError, setNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [emailError, setEmailError] = useState(false);

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
    <FormModalContainer>
      <FormModalContent>
        <FormModalCloseIcon onClick={() => setFormModalOpen(false)} />
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
        <FormModalBottom>
          <Typography>Total price: {formatToCurrency(totalPrice, 'usd')}</Typography>
          <Button variant="outlined" onClick={handleSubmit}>
            Confirm order
          </Button>
        </FormModalBottom>
      </FormModalContent>
    </FormModalContainer>
  );
});
