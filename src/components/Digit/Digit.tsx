import { useState } from 'react';
import './Digit.scss';

const Digit = props => {
  const [state, setState] = useState();

  return (
    <div className="Digit">[DIGIT]</div>
  );
};

export default Digit;
