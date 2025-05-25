import { ICountdownParams } from './common/interfaces/api.countdown.interfaces.ts';

const digitSize = 5;
const pointSize = 1.5;
const digitSpacing = 1;
const colonSpacing = 4;

const config = {
  api: {
    countdown: (params: ICountdownParams): string => `/countdowns/${params.id}`,
    countdowns: `/countdowns`,
  },
  konva: {
    colonHeight: (14 + colonSpacing) * pointSize,
    colonSpacing,
    colonWidth: 7 * pointSize,
    digitHeight: 14 * digitSize,
    digitSize,
    digitSpacing,
    digitWidth: (16 + digitSpacing) * digitSize,
    digitXOffset: 8, // Width of single digit.
    pointSize,
  },
  routes: {
    home: `/:id`,
    homeDefault: `/`,
    // ToDo: Remove before deploying.
    playground: `/playground`,
  },
};

export default config;
