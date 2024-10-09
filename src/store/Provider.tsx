import React from 'react';

import { store, StoreContext } from '@src/store/root';

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export default Provider;
