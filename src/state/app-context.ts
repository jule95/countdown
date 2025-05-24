import { createContext } from 'react';
import { IAppContext, IAppState } from '../common/interfaces/state.interfaces';

export const initState: IAppState = {
  countdown: {
    target: null,
    title: ``,
  },
  modal: false,
};

const AppContext = createContext<IAppContext>({
  actions: {
    setCountdown:() => {},
    toggleModal:() => {},
  },
  state: {
    countdown: {
      target: null,
      title: ``,
    },
    modal: false,
  },
});

export default AppContext;
