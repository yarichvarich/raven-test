import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import ReactJson from 'react-json-view';

import { useStore, useCurrency } from '@src/hooks';
import { addressRegex, emailRegex, nameRegex } from '@src/constants';

import {
  FormModalBottom,
  FormModalCloseIcon,
  FormModalContainer,
  FormModalContent,
  JsonContainer,
} from './styled';

export const FormModal: React.FC = observer(() => {
  const {
    setFormModalOpen,
    totalPrice,
    order,
    userName,
    userEmail,
    userAddress,
    setUserName,
    setUserEmail,
    setUserAddress,
  } = useStore();

  const { formatCurrency } = useCurrency();

  const [isSubmited, setIsSubmited] = useState(false);

  const [nameError, setNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = () => {
    const isNameValid = nameRegex.test(userName);
    const isAddressValid = addressRegex.test(userAddress);
    const isEmailValid = emailRegex.test(userEmail);

    setNameError(!isNameValid);
    setAddressError(!isAddressValid);
    setEmailError(!isEmailValid);

    if (isNameValid && isAddressValid && isEmailValid) {
      setIsSubmited(true);
    }
  };

  return (
    <FormModalContainer>
      <FormModalContent>
        <FormModalCloseIcon onClick={() => setFormModalOpen(false)} />
        <Typography variant="h6">Order form</Typography>
        {!isSubmited && (
          <>
            <TextField
              size="small"
              label="Name"
              placeholder="Your name"
              value={userName}
              onChange={e => setUserName(e.target.value)}
              error={nameError}
              helperText={
                nameError ? 'Name must be at least 2 characters long and contain only letters' : ''
              }
            />
            <TextField
              size="small"
              label="Address"
              placeholder="Your address"
              value={userAddress}
              onChange={e => setUserAddress(e.target.value)}
              error={addressError}
              helperText={addressError ? 'Address is required' : ''}
            />
            <TextField
              size="small"
              label="Email"
              placeholder="Your email"
              value={userEmail}
              onChange={e => setUserEmail(e.target.value)}
              error={emailError}
              helperText={emailError ? 'Enter a valid email address' : ''}
            />
            <FormModalBottom>
              <Typography>Total price: {formatCurrency(totalPrice)}</Typography>
              <Button variant="outlined" onClick={handleSubmit}>
                Confirm order
              </Button>
            </FormModalBottom>
          </>
        )}
        {isSubmited && (
          <JsonContainer>
            <ReactJson
              collapseStringsAfterLength={20}
              enableClipboard={true}
              src={JSON.parse(
                JSON.stringify({
                  userCredentials: { userName, userAddress, userEmail },
                  carInfo: order,
                  totalPrice: formatCurrency(totalPrice),
                })
              )}
            />
          </JsonContainer>
        )}
      </FormModalContent>
    </FormModalContainer>
  );
});
