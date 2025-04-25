import { FC, useEffect, useState } from 'react';
import './Countdown.scss';
import { intervalToDuration } from 'date-fns';
import { ICountdownState } from './Countdown.types.ts';
import { produce } from 'immer';
import DoubleDigit from '../DoubleDigit/DoubleDigit.tsx';
import Colon from '../Colon/Colon.tsx';
import { useTranslation } from 'react-i18next';

const Countdown: FC = () => {
  const { t } = useTranslation();

  const [state, setState] = useState<ICountdownState>({
    countdown: [],
    labels: [
      t(`countdown.months`),
      t(`countdown.weeks`),
      t(`countdown.days`),
      t(`countdown.hours`),
      t(`countdown.minutes`),
      t(`countdown.seconds`),
    ],
    target: null,
  });

  useEffect(() => {
    // API call goes here ...
    setState(produce(draft => {
      draft.target = new Date(2025, 5, 28, 22, 0, 0);
    }));
  }, []);

  useEffect(() => {
    if (!state.target) {
      return;
    }

    const interval = setInterval(() => {
      const duration = intervalToDuration({
        end: state.target!,
        start: new Date(),
      });

      const countdown = [
        duration.months ?? 0,
        Math.floor((duration.days ?? 0) / 7),
        (duration.days ?? 0) % 7,
        duration.hours ?? 0,
        duration.minutes ?? 0,
        duration.seconds ?? 0,
      ];

      setState(produce(draft => {
        draft.countdown = countdown;
      }));
    }, 250);

    return () => {
      clearInterval(interval);
    };
  }, [state.target]);

  return (
    <div className="Countdown">
      {state.countdown.map((value, index) => (
        <>
          <DoubleDigit
            label={state.labels[index]}
            number={value} />
          {index < state.countdown.length - 1 && <Colon />}
        </>
      ))}
    </div>
  );
};

export default Countdown;
