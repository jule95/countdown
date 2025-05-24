import { ICountdownParams } from './common/interfaces/api.countdown.interfaces.ts';

const config = {
  api: {
    countdown: (params: ICountdownParams): string => `/countdowns/${params.id}`,
    countdowns: `/countdowns`,
  },
  routes: {
    home: `/:id`,
    homeDefault: `/`,
    // ToDo: Remove before deploying.
    playground: `/playground`,
  },
};

export default config;
