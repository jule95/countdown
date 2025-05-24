import { FC } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateField, LocalizationProvider } from '@mui/x-date-pickers';
import { FormControl, FormLabel } from '@mui/material';
import { IDateInputProps } from './DateInput.types.ts';

const DateInput: FC<IDateInputProps> = props => (
  <FormControl>
    <FormLabel>{props.label}</FormLabel>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateField
        format="dd.MM.yyyy"
        name={props.name}
        value={props.value}
        onChange={value => {props.onChange(props.name, value);}} />
    </LocalizationProvider>
  </FormControl>
);

export default DateInput;
