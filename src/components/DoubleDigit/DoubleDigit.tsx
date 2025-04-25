import { FC } from 'react';
import Digit from '../Digit/Digit.tsx';
import { IDoubleDigitProps } from './DoubleDigit.types.ts';
import './DoubleDigit.scss';
import Colon from '../Colon/Colon.tsx';

const DoubleDigit: FC<IDoubleDigitProps> = ({ number, hasColon = false, label }) => (
  <div className="DoubleDigit">
    <div className="DoubleDigit__digits">
      <Digit
        className="DoubleDigit__digits-first"
        number={Math.floor(number / 10)} />
      <Digit number={number % 10} />
      {hasColon && <Colon />}
    </div>
    <div className="DoubleDigit__label">
      {label}
    </div>
  </div>
);

export default DoubleDigit;
