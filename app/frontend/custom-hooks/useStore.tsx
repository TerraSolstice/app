import { useState, useCallback } from 'react';

type StoreState = {
  [key: string]: any;
};

const useStore = (initialState: StoreState = {}) => {
  const [store, setStore] = useState<StoreState>(initialState);

  const updateStore = useCallback((key: string, value: any) => {
    setStore((prevStore) => ({
      ...prevStore,
      [key]: value,
    }));
  }, []);

  const getStoreValue = useCallback((key: string) => {
    return store[key];
  }, [store]);

  return {
    store,
    updateStore,
    getStoreValue,
  };
};

export default useStore;