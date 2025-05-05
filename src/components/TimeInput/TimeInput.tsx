import { FC } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, TimeField } from '@mui/x-date-pickers';
import { FormControl, FormLabel } from '@mui/material';
import { ITimeInput } from './TimeInput.types.ts';

const TimeInput: FC<ITimeInput> = props => (
  <FormControl>
    <FormLabel>{props.label}</FormLabel>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimeField
        format="HH:mm"
        name={props.name}
        value={props.value}
        onChange={value => {props.onChange(props.name, value);}} />
    </LocalizationProvider>
  </FormControl>
);

export default TimeInput;
