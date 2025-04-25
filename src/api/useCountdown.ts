/* Change as needed. */
// This is just a demo of how I thought an API service in React makes sense.

import { useState } from 'react';
import {
  IResponseCountdown
} from '../common/interfaces/api.countdown.interfaces.ts';
import ApiService from './ApiService';
import config from '../config';
import { produce } from 'immer';
import ApiHelper from './ApiHelper';
import { IApiError } from '../common/interfaces/api.interfaces';

type TCountdownHook = [{
  getCountdown(): Promise<void>,
}, ICountdownHookState];

interface ICountdownHookState {
  loading: boolean;
  response: IResponseCountdown | null;
  error: IApiError | null;
  referer: ECountdownHookReferer | null;
}

export enum ECountdownHookReferer {
  GET_COUNTDOWN,
}

function useCountdown(): TCountdownHook {
  const apiService = new ApiService();
  const [state, setState] = useState<ICountdownHookState>({
    error: null,
    loading: false,
    referer: null,
    response: null,
  });

  const resetState = () => {
    setState(produce(draft => {
      draft.loading = true;
      draft.error = null;
      draft.response = null;
      draft.referer = null;
    }));
  };

  const setErrorState = (error: unknown, referer: ECountdownHookReferer) => {
    setState(produce(draft => {
      draft.error = ApiHelper.handleError(error);
      draft.referer = referer;
    }));
  };

  const setResponseState = (response: IResponseCountdown, referer: ECountdownHookReferer) => {
    setState(produce(draft => {
      draft.loading = false;
      draft.error = null;
      draft.response = response;
      draft.referer = referer;
    }));
  };

  const getCountdown = async (): Promise<void> => {
    resetState();
    const referer = ECountdownHookReferer.GET_COUNTDOWN;

    try {
      const response = await apiService.get<IResponseCountdown>(config.api.countdown);
      setResponseState(response, referer);
    } catch(error: unknown) {
      setErrorState(error, referer);
    }
  };

  return [{
    getCountdown,
  }, state];
}

export default useCountdown;
