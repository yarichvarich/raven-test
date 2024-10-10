import React, { useCallback, useMemo, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Grid2, Pagination } from '@mui/material';

import { displayedItemsCount } from '@src/constants';
import { Item } from '@src/components';
import useStore from '@src/hooks/useStore';
import data from '@src/data.json';

import { ItemGrid } from './styled';

export const IndexPage: React.FC = observer(() => {
  const [page, setPage] = useState(1);
  const { addItemToCart } = useStore();

  const itemRows = useMemo(
    () =>
      data.slice((page - 1) * displayedItemsCount, page * displayedItemsCount).map(val => (
        <Grid2 key={val.id} size={{ xl: 4, md: 6, sm: 6, xs: 12 }}>
          <Item carInfo={val} addItemToCart={addItemToCart} />
        </Grid2>
      )),
    [page, addItemToCart]
  );

  const handlePageChanged = useCallback(
    (_: React.ChangeEvent<unknown>, value: number) => setPage(value),
    []
  );

  return (
    <>
      <ItemGrid container spacing={2}>
        {itemRows}
      </ItemGrid>
      <Pagination
        variant="outlined"
        count={Math.ceil(data.length / displayedItemsCount)}
        page={page}
        onChange={handlePageChanged}
      />
    </>
  );
});
