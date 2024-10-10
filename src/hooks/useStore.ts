import { useContext } from 'react';
import { StoreContext } from '@src/store/root';

export const useStore = () => {
  const store = useContext(StoreContext);
  return store;
};
