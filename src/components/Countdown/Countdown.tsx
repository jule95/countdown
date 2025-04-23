import { FC } from 'react';
import './Countdown.scss';
import Digit from '../Digit/Digit.tsx';

// eslint-disable-next-line
const Countdown: FC = props => (
  <div className="Countdown">
    <Digit
      number={0}
      size={10} />
    <Digit
      number={1}
      size={10} />
  </div>
);

export default Countdown;
