import { createContext } from 'react';
import { IAppContext, IAppState } from '../common/interfaces/state.interfaces';

export const initState: IAppState = {
  target: null,
  title: ``,
};

const AppContext = createContext<IAppContext>({
  actions: {
    setTarget: () => {},
    setTitle: () => {},
  },
  state: {
    target: null,
    title: ``,
  },
});

export default AppContext;
