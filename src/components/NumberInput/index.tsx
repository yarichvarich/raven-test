import { Box, Button, Typography } from '@mui/material';
import React from 'react';

interface INumberInputProps {
  min: number;
  max: number;
  value: number;
  handleChange: (value: number) => void;
}

export const NumberInput: React.FC<INumberInputProps> = ({ min, max, value, handleChange }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', columnGap: 1 }}>
      <Button
        size="small"
        variant="outlined"
        sx={{ minWidth: 0, width: 24, height: 24, borderRadius: '20px' }}
        disabled={value <= min}
        onClick={() => handleChange(value - 1)}
      >
        -
      </Button>
      <Box>
        <Typography>{value}</Typography>
      </Box>
      <Button
        size="small"
        variant="outlined"
        sx={{ minWidth: 0, width: 24, height: 24, borderRadius: '20px' }}
        disabled={value >= max}
        onClick={() => handleChange(value + 1)}
      >
        +
      </Button>
    </Box>
  );
};
