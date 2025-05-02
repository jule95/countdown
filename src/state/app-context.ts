import { createContext } from 'react';
import { IAppContext, IAppState } from '../common/interfaces/state.interfaces';

export const initState: IAppState = {
  modal: false,
  target: null,
  title: ``,
};

const AppContext = createContext<IAppContext>({
  actions: {
    setTarget: () => {},
    setTitle: () => {},
    toggleModal:() => {},
  },
  state: {
    modal: false,
    target: null,
    title: ``,
  },
});

export default AppContext;
