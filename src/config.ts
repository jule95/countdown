import { ICountdownParams } from './common/interfaces/api.countdown.interfaces.ts';

const digitSize = 5;
const pointSize = 1.5;
const spacing = 2;

const config = {
  api: {
    countdown: (params: ICountdownParams): string => `/countdowns/${params.id}`,
    countdowns: `/countdowns`,
  },
  konva: {
    colonHeight: 14,
    colonWidth: 7,
    digitHeight: 14,
    digitSize: 5,
    digitWidth: 16,
    pointSize: 1.5,
  },
  routes: {
    home: `/:id`,
    homeDefault: `/`,
    // ToDo: Remove before deploying.
    playground: `/playground`,
  },
};

export default config;
