import { FC, useContext, useEffect, useState } from 'react';
import './Countdown.scss';
import { intervalToDuration } from 'date-fns';
import { ICountdownState } from './Countdown.types.ts';
import { produce } from 'immer';
import DoubleDigit from '../DoubleDigit/DoubleDigit.tsx';
import Colon from '../Colon/Colon.tsx';
import { useTranslation } from 'react-i18next';
import useCountdown from '../../api/useCountdown.ts';
import AppContext from '../../state/app-context.ts';

const Countdown: FC = () => {
  const { t } = useTranslation();
  const [countdownState, setCountdownState] = useState<ICountdownState>({
    countdown: [],
    labels: [
      t(`countdown.months`),
      t(`countdown.weeks`),
      t(`countdown.days`),
      t(`countdown.hours`),
      t(`countdown.minutes`),
      t(`countdown.seconds`),
    ],
  });
  const [apiActions, apiState] = useCountdown();
  const { actions, state } = useContext(AppContext);

  useEffect(() => {
    void apiActions.getCountdown();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!apiState.response) {
      return;
    }

    actions.setTarget(new Date(apiState.response.target));
    actions.setTitle(apiState.response.title);
    // eslint-disable-next-line
  }, [apiState.response]);

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

      setCountdownState(produce(draft => {
        draft.countdown = countdown;
      }));
    }, 250);

    return () => {
      clearInterval(interval);
    };
  }, [state.target]);

  return (
    <div className="Countdown">
      {countdownState.countdown.map((value, index) => (
        <>
          <DoubleDigit
            label={countdownState.labels[index]}
            number={value} />
          {index < countdownState.countdown.length - 1 && <Colon />}
        </>
      ))}
    </div>
  );
};

export default Countdown;
