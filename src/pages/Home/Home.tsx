import {
  add,
  addDays,
  addMonths, addWeeks,
  differenceInDays,
  differenceInHours, differenceInMinutes,
  differenceInMonths, differenceInSeconds,
  differenceInWeeks,
  differenceInYears,
  subDays, subHours, subMinutes,
  subMonths,
  subWeeks
} from 'date-fns';
import Countdown from '../../components/Countdown/Countdown.tsx';
import { useEffect } from 'react';

const Home = () => {
  // new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
  const target = new Date(2025, 11, 31, 0, 0, 0);
  console.log(target);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date(2025, 3, 22, 0, 0, 0);

      const months = differenceInMonths(target, now);

      const weeksDate = subMonths(target, months);
      const weeks = differenceInWeeks(weeksDate, now);

      const daysDate = subWeeks(weeksDate, weeks);
      const days = differenceInDays(daysDate, now);

      const hoursDate = subDays(daysDate, days);
      const hours = differenceInHours(hoursDate, now);

      const minutesDate = subHours(hoursDate, hours);
      const minutes = differenceInMinutes(minutesDate, now);

      const secondsDate = subMinutes(minutesDate, minutes);
      const seconds = differenceInSeconds(secondsDate, now);

      console.log(addMonths(now, months));
      console.log(addWeeks(addMonths(now, months), weeks));
      console.log(addDays(addWeeks(addMonths(now, months), weeks), days));
      console.log(months, weeks, days, hours, minutes, seconds);
    }, 1000/3);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <Countdown />
    </div>
  );
};

export default Home;
