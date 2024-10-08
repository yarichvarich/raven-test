import { Item } from '@src/components';
import React from 'react';

import data from '@src/data.json';
import { Grid2, Box } from '@mui/material';

export const IndexPage: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, paddingTop: 5, display: 'flex', justifyContent: 'center' }}>
      <Grid2 container spacing={2} sx={{ py: 2, maxWidth: '900px' }}>
        {data.map(val => (
          <Grid2 size={4}>
            <Item carInfo={val} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};
