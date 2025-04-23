import { FC } from 'react';
import Digit from '../Digit/Digit.tsx';
import { IDoubleDigitProps } from './DoubleDigit.types.ts';
import './DoubleDigit.scss';

const DoubleDigit: FC<IDoubleDigitProps> = props => (
  <div className="DoubleDigit">
    <Digit
      className="DoubleDigit__digit"
      number={Math.floor(props.number / 10)} />
    <Digit number={props.number % 10} />
  </div>
);

export default DoubleDigit;
