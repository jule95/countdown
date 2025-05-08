import { ICountdownParams } from './common/interfaces/api.interfaces.ts';

const config = {
  api: {
    countdown: (params: ICountdownParams): string => `/countdowns/${params.id}`,
    countdowns: `/countdown`,
  },
  routes: {
    home: `/`,
    page1: `/page1`,
    // ToDo: Remove before deploying.
    playground: `/playground`,
  },
};

export default config;
