import { FC, ReactElement, useReducer } from 'react';
import appReducer from './app-reducer';
import AppContext, { initState } from './app-context';
import { IAppActions } from '../common/interfaces/state.interfaces';
import { ECountdownActions } from '../common/enums/state.enums';

const AppState:FC<{ children: ReactElement}> = props => {
  const [state, dispatch] = useReducer(appReducer, initState);

  const setTitle = (payload: string) => {
    dispatch({ payload, type: ECountdownActions.SET_TITLE });
  };

  const setTarget = (payload: Date) => {
    dispatch({ payload, type: ECountdownActions.SET_TARGET });
  };

  const toggleModal = () => {
    dispatch({ type: ECountdownActions.SET_MODAL });
  };

  const actions: IAppActions = {
    setTarget,
    setTitle,
    toggleModal,
  };

  return (
    <AppContext.Provider value={{ actions, state }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
