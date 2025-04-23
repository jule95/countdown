import { FC } from 'react';
import './Countdown.scss';
import Digit from '../Digit/Digit.tsx';
import {
  add,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInMonths,
  differenceInSeconds,
  differenceInWeeks,
  sub
} from 'date-fns';
import { useEffect } from 'react';

// eslint-disable-next-line
const Countdown: FC = props => {
  // new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
  const target = new Date(2025, 5, 22, 8, 0, 0);
  const now = new Date(2025, 3, 22, 8, 0, 0);

  const months = differenceInMonths(target, now);

  const weeksDate = sub(target, { months });
  const weeks = differenceInWeeks(weeksDate, now);

  const daysDate = sub(weeksDate, { weeks });
  const days = differenceInDays(daysDate, now);

  const hoursDate = sub(daysDate, { days });
  const hours = differenceInHours(hoursDate, now);

  const minutesDate = sub(hoursDate, { hours });
  const minutes = differenceInMinutes(minutesDate, now);

  const secondsDate = sub(minutesDate, { minutes });
  const seconds = differenceInSeconds(secondsDate, now);

  const result = add(now, {
    days,
    hours,
    minutes,
    months,
    seconds,
    weeks,
  });
  const success = target.getTime() === result.getTime();

  console.log(target);
  console.log(result);
  console.log(success);

  useEffect(() => {
    const interval = setInterval(() => {
      // countdown goes here ...
    }, 1000/3);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="Countdown">
      <Digit
        number={0}
        size={10} />
      <Digit
        number={1}
        size={10} />
    </div>
  )
}

export default Countdown;
