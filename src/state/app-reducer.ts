import { produce } from 'immer';
import { IAppState, IStateAction } from '../common/interfaces/state.interfaces';
import { ECountdownActions } from '../common/enums/state.enums';

const appReducer = produce((draft: IAppState, action: IStateAction) => {
  switch (action.type) {
    case ECountdownActions.SET_TITLE:
      draft.title = action.payload;
      break;
    case ECountdownActions.SET_TARGET:
      draft.target = action.payload;
      break;
    case ECountdownActions.SET_MODAL:
      draft.modal = !draft.modal;
      break;
    default:
  }
});

export default appReducer;
