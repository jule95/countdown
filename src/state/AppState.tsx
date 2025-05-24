import { FC, ReactElement, useReducer } from 'react';
import appReducer from './app-reducer';
import AppContext, { initState } from './app-context';
import { IAppActions } from '../common/interfaces/state.interfaces';
import { ECountdownActions } from '../common/enums/state.enums';
import { ISetCountdownPayload } from '../common/interfaces/state.payload.interfaces.ts';

const AppState:FC<{ children: ReactElement}> = props => {
  const [state, dispatch] = useReducer(appReducer, initState);

  const setCountdown = (payload: ISetCountdownPayload) => {
    dispatch({ payload, type: ECountdownActions.SET_COUNTDOWN });
  };

  const toggleModal = () => {
    dispatch({ type: ECountdownActions.SET_MODAL });
  };

  const actions: IAppActions = {
    setCountdown,
    toggleModal,
  };

  return (
    <AppContext.Provider value={{ actions, state }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
