import React from 'react';
import { Articles } from '../stores';
/*
Example of multiple stores can be created and shared through a hook.
Add additional stores to the object in createContext.
*/

const StoreContext = React.createContext({ articles: new Articles() });

export const useStores = () => {
  return React.useContext(StoreContext);
};
