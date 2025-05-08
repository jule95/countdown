import { ICountdownParams } from './common/interfaces/api.interfaces.ts';

const config = {
  api: {
    countdown: (params: ICountdownParams): string => `/countdowns/${params.id}`,
    countdowns: `/countdowns`,
  },
  routes: {
    home: `/`,
    // ToDo: Remove before deploying.
    playground: `/playground`,
  },
};

export default config;
