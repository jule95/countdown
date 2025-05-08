/* eslint-disable sort-keys */

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
import { IResponseCountdown } from '../../common/interfaces/api.countdown.interfaces.ts';

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
    void apiActions.getCountdown({ id: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!apiState.response) {
      return;
    }

    const response = apiState.response as IResponseCountdown;

    actions.setTarget(new Date(response.target));
    actions.setTitle(response.title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

      setCountdownState(produce(draft => {
        draft.countdown.months =  duration.months ?? 0;
        draft.countdown.weeks =  Math.floor((duration.days ?? 0) / 7);
        draft.countdown.days =   (duration.days ?? 0) % 7;
        draft.countdown.hours =  duration.hours ?? 0;
        draft.countdown.minutes =  duration.minutes ?? 0;
        draft.countdown.seconds =   duration.seconds ?? 0;
      }));
    }, 250);

    return () => {
      clearInterval(interval);
    };
  }, [state.target]);

  return (
    <div className="Countdown">
      {Object.values(countdownState.countdown).map((value, index, arr) => (
        <>
          <DoubleDigit
            label={countdownState.labels[index]}
            number={value} />
          {index < arr.length - 1 && <Colon />}
        </>
      ))}
    </div>
  );
};

export default Countdown;
