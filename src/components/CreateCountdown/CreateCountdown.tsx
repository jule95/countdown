import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { ChangeEvent, FC, useContext, useState } from 'react';
import AppContext from '../../state/app-context.ts';
import { Button, FormControl, FormLabel, TextField, Typography } from '@mui/material';
import { modalStyles } from './CreatCountdown.config.ts';
import { useTranslation } from 'react-i18next';
import DateInput from '../DateInput/DateInput.tsx';
import { ICreateCountdownFormState } from './CreateCountdown.types.ts';
import { produce } from 'immer';
import TimeInput from '../TimeInput/TimeInput.tsx';

const CreateCountdown: FC = () => {
  const { actions, state } = useContext(AppContext);
  const { t } = useTranslation();
  const [formState, setFormState] = useState<ICreateCountdownFormState>({
    date: new Date(),
    time: new Date(),
    title: ``,
  });

  const handleDateChange = (name: string, value: Date | null) => {
    setFormState(produce(draft => {
      // @ts-expect-error TS7053
      draft[name] = value;
    }));
  };

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormState(produce(draft => {
      draft.title = event.target.value;
    }));
  };

  return (
    <Modal
      open={state.modal}
      onClose={actions.toggleModal}>
      <Box
        component="form"
        sx={modalStyles}>
        <Typography
          sx={{ marginBottom: `24px`, textTransform: `uppercase` }}
          variant="h6">
          {t(`createCountdown.heading`)}
        </Typography>
        <FormControl>
          <FormLabel>{t(`createCountdown.title`)}</FormLabel>
          <TextField
            name="title"
            value={formState.title}
            onChange={handleTitleChange} />
        </FormControl>
        <Box sx={{ marginTop: `24px` }}>
          <DateInput
            label={t(`createCountdown.date`)}
            name="date"
            value={formState.date}
            onChange={handleDateChange} />
          <TimeInput
            label={t(`createCountdown.time`)}
            name="time"
            value={formState.time}
            onChange={handleDateChange} />
        </Box>
        <Box sx={{
          display: `flex`,
          marginTop: `32px`,
        }}>
          <Button
            color="secondary"
            onClick={actions.toggleModal}>
            Text
          </Button>
          <Button>
            Text
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateCountdown;
