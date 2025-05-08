import useCountdown from '../../api/useCountdown.ts';
import { FC, useEffect } from 'react';
import { FormGroup } from '@mui/material';
import { ICountdownSelectProps } from './CountdownSelect.types.ts';

const CountdownSelect: FC<ICountdownSelectProps> = props => {
  const [apiActions, apiState] = useCountdown();

  useEffect(() => {
    // Initial API call here.
  }, []);

  return (
    <FormGroup>
      [COUNTDOWNSELECT]
    </FormGroup>
  );
};

export default CountdownSelect;
