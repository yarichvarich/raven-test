import { useContext } from 'react';
import { StoreContext } from '@src/store/root';

const useStore = () => {
  const store = useContext(StoreContext);
  return store;
};

export default useStore;
