import { useState } from 'react';
import {
  IResponseCountdown
} from '../common/interfaces/api.countdown.interfaces.ts';
import ApiService from './ApiService';
import config from '../config';
import { produce } from 'immer';
import ApiHelper from './ApiHelper';
import { IApiError, ICountdownParams } from '../common/interfaces/api.interfaces';

type TCountdownHook = [{
  getCountdown(params: ICountdownParams): Promise<void>,
  getCountdowns(): Promise<void>,
}, ICountdownHookState];

type TResponseCountdown = IResponseCountdown | IResponseCountdown[] | null

interface ICountdownHookState {
  loading: boolean;
  response: TResponseCountdown;
  error: IApiError | null;
  referer: ECountdownHookReferer | null;
}

export enum ECountdownHookReferer {
  GET_COUNTDOWN,
  GET_COUNTDOWNS,
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

  const setResponseState = (response: TResponseCountdown, referer: ECountdownHookReferer) => {
    setState(produce(draft => {
      draft.loading = false;
      draft.error = null;
      draft.response = response;
      draft.referer = referer;
    }));
  };

  const getCountdown = async (params: ICountdownParams): Promise<void> => {
    resetState();
    const referer = ECountdownHookReferer.GET_COUNTDOWN;

    try {
      const response = await apiService.get<IResponseCountdown>(config.api.countdown(params));
      setResponseState(response, referer);
    } catch(error: unknown) {
      setErrorState(error, referer);
    }
  };

  const getCountdowns = async (): Promise<void> => {
    resetState();
    const referer = ECountdownHookReferer.GET_COUNTDOWNS;

    try {
      const response = await apiService.get<IResponseCountdown[]>(config.api.countdowns);
      setResponseState(response, referer);
    } catch(error: unknown) {
      setErrorState(error, referer);
    }
  };

  return [{
    getCountdown,
    getCountdowns,
  }, state];
}

export default useCountdown;
