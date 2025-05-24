/* eslint-disable sort-keys */

import { FC, useContext, useEffect, useState } from 'react';
import './Countdown.scss';
import { intervalToDuration } from 'date-fns';
import { ICountdownState } from './Countdown.types.ts';
import { produce } from 'immer';
import DoubleDigit from '../DoubleDigit/DoubleDigit.tsx';
import Colon from '../Colon/Colon.tsx';
import AppContext from '../../state/app-context.ts';
import { labels } from './Countdown.config.ts';
import { useTranslation } from 'react-i18next';
import React from 'react';

const Countdown: FC = () => {
  const { t } = useTranslation();
  const [countdownState, setCountdownState] = useState<ICountdownState>({
    countdown: {
      months: 0,
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
  });
  const { state } = useContext(AppContext);

  useEffect(() => {
    if (!state.countdown.target) {
      return;
    }

    const interval = setInterval(() => {
      const duration = intervalToDuration({
        end: state.countdown.target!,
        start: new Date(),
      });

      setCountdownState(produce(draft => {
        draft.countdown.months =  duration.months ?? 0;
        draft.countdown.weeks =  Math.floor((duration.days ?? 0) / 7);
        draft.countdown.days =   (duration.days ?? 0) % 7;
        draft.countdown.hours =  duration.hours ?? 0;
        draft.countdown.minutes =  duration.minutes ?? 0;
        draft.countdown.seconds =   duration.seconds ?? 0;
      }));
    }, 250);

    return () => clearInterval(interval);
  }, [state.countdown.target]);

  return (
    <div className="Countdown">
      {Object.values(countdownState.countdown).map((value, index, arr) => (
        <React.Fragment key={`countdown-double-digit-${index}`}>
          <DoubleDigit
            label={t(labels[index])}
            number={value} />
          {index < arr.length - 1 && <Colon />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Countdown;
