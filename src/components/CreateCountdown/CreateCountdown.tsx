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
import { add, getHours, getMinutes, startOfDay } from 'date-fns';
import LocalStorageHelper from '../../helpers/LocalStorageHelper.ts';

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

  const handleCreateCountdown = () => {
    const target = add(startOfDay(formState.date!), {
      hours: getHours(formState.time!),
      minutes: getMinutes(formState.time!),
    });

    LocalStorageHelper.setCountdown({
      target: target.getTime(),
      title: formState.title,
    });

    actions.toggleModal();
  };

  return (
    <Modal
      open={state.modal}
      onClose={actions.toggleModal}>
      <Box
        display="flex"
        flexDirection="column"
        gap={3}
        sx={modalStyles}>
        <Typography
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
        <Box
          display="flex"
          gap={2}>
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
        <Box
          display="flex"
          gap={2}
          justifyContent="end">
          <Button
            color="secondary"
            onClick={actions.toggleModal}>
            {t(`createCountdown.cancel`)}
          </Button>
          <Button onClick={handleCreateCountdown}>
            {t(`createCountdown.create`)}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateCountdown;
