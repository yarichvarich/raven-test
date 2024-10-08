import { Item } from '@src/components';
import React, { useCallback, useMemo, useState } from 'react';

import data from '@src/data.json';
import { Grid2, Box, Pagination } from '@mui/material';

export const IndexPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const displayedItemsCount = 18;

  const displayedItems = useMemo(
    () =>
      data.slice((page - 1) * displayedItemsCount, page * displayedItemsCount).map(val => (
        <Grid2 key={val.id} size={{ xl: 4, md: 6, sm: 6, xs: 12 }}>
          <Item carInfo={val} />
        </Grid2>
      )),
    [page]
  );

  const handlePageChanged = useCallback(
    (_: React.ChangeEvent<unknown>, value: number) => setPage(value),
    []
  );

  return (
    <Box
      sx={{
        flexGrow: 1,
        paddingTop: 5,
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
        width: '100%',
        padding: 6,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          alignItems: 'center',
          maxWidth: '900px',
          width: '100%',
        }}
      >
        <Grid2 container spacing={2} sx={{ py: 2, width: '100%' }}>
          {displayedItems}
        </Grid2>
        <Pagination
          variant="outlined"
          count={Math.floor(data.length / displayedItemsCount)}
          page={page}
          onChange={handlePageChanged}
        />
      </Box>
    </Box>
  );
};
