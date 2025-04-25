import { ECountdownActions } from '../enums/state.enums';

export interface IStateAction {
  type: ECountdownActions;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any; // ToDo: Figure this out.
}

export interface IAppState {
  title: string;
  target: Date | null;
}

export interface IAppActions {
  setTitle: (payload: string) => void;
  setTarget: (payload: Date) => void;
}

export interface IAppContext {
  actions: IAppActions;
  state: IAppState;
}
