import React from 'react';
import { Articles } from '../stores';

const StoreContext = React.createContext({ articles: new Articles() });

export const useStores = () => {
  return React.useContext(StoreContext);
};
