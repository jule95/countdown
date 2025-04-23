import { FC, useEffect, useState } from 'react';
import './Countdown.scss';
import { intervalToDuration } from 'date-fns';
import { ICountdownState } from './Countdown.types.ts';
import { produce } from 'immer';
import DoubleDigit from '../DoubleDigit/DoubleDigit.tsx';
import Colon from '../Colon/Colon.tsx';

const Countdown: FC = () => {
  const [state, setState] = useState<ICountdownState>({
    countdown: [],
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
      {state.countdown.map((value, index) => {
        if (index < state.countdown.length - 1) {
          return (
            <div
              key={`countdown-colon-digit-${index}`}
              className="Countdown__digit">
              <DoubleDigit number={value} />
              <Colon />
            </div>);
        }
        return (
          <DoubleDigit
            key={`countdown-digit-${index}`}
            number={value} />
        );
      })}
    </div>
  );
};

export default Countdown;
