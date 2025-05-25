import { FC, useContext, useEffect, useState } from 'react';
import { intervalToDuration } from 'date-fns';
import { produce } from 'immer';
import AppContext from '../../state/app-context.ts';
import { Box, Typography } from '@mui/material';
import Digit from '../Digit/Digit.tsx';
import Colon from '../Colon/Colon.tsx';
import { useTranslation } from 'react-i18next';
import { labels } from './Countdown.config.ts';
import { sxLabel } from './Countdown.styles.ts';

const Countdown: FC = () => {
  const [countdown, setCountdown] = useState<number[]>([0, 0, 0, 0, 0, 0]);
  const { state } = useContext(AppContext);
  const { t } = useTranslation();

  useEffect(() => {
    if (!state.countdown.target) {
      return;
    }

    const interval = setInterval(() => {
      const start = new Date();

      const duration = intervalToDuration({
        end: state.countdown.target!,
        start,
      });

      setCountdown(produce(draft => {
        draft[0] = duration.months ?? 0;
        draft[1] = Math.floor((duration.days ?? 0) / 7);
        draft[2] = (duration.days ?? 0) % 7;
        draft[3] = duration.hours ?? 0;
        draft[4] = duration.minutes ?? 0;
        draft[5] = duration.seconds ?? 0;
      }));

      if (state.countdown.target!.getTime() - start.getTime() <= 0) {
        clearInterval(interval);
      }
    }, 250);

    return () => {
      clearInterval(interval);
    };
  }, [state.countdown.target]);

  return (
    <Box display="flex">
      {countdown.map((value, index) => (
        <Box>
          <Box display="flex">
            <Digit number={value} />
            <Colon visible={index < countdown.length - 1} />
          </Box>
          <Typography sx={sxLabel}>{t(labels[index])}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Countdown;
