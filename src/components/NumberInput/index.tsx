import React from 'react';
import { Box, Typography } from '@mui/material';

import { NumberInputButton, NumberInputContainer } from './styled';

interface INumberInputProps {
  min: number;
  max: number;
  value: number;
  handleChange: (value: number) => void;
}

export const NumberInput: React.FC<INumberInputProps> = ({ min, max, value, handleChange }) => {
  return (
    <NumberInputContainer>
      <NumberInputButton
        size="small"
        variant="outlined"
        disabled={value <= min}
        onClick={() => handleChange(value - 1)}
      >
        -
      </NumberInputButton>
      <Box>
        <Typography>{value}</Typography>
      </Box>
      <NumberInputButton
        size="small"
        variant="outlined"
        disabled={value >= max}
        onClick={() => handleChange(value + 1)}
      >
        +
      </NumberInputButton>
    </NumberInputContainer>
  );
};
