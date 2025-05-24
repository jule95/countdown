import { ECountdownActions } from '../enums/state.enums';
import { ISetCountdownPayload } from './state.payload.interfaces.ts';

export interface IStateAction {
  type: ECountdownActions;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any; // ToDo: Figure this out.
}

export interface IAppState {
  countdown: {
    target: Date | null;
    title: string;
  };
  modal: boolean;
}

export interface IAppActions {
  setCountdown: (payload: ISetCountdownPayload) => void;
  toggleModal: () => void;
}

export interface IAppContext {
  actions: IAppActions;
  state: IAppState;
}
