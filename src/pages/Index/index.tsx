import { Item } from '@src/components';
import React, { useCallback, useMemo, useState } from 'react';
import { Grid2, Pagination } from '@mui/material';

import data from '@src/data.json';

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
    <>
      <Grid2 container spacing={2} sx={{ py: 2, width: '100%' }}>
        {displayedItems}
      </Grid2>
      <Pagination
        variant="outlined"
        count={Math.ceil(data.length / displayedItemsCount)}
        page={page}
        onChange={handlePageChanged}
      />
    </>
  );
};
