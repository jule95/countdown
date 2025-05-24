import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { FC, useContext } from 'react';
import AppContext from '../../state/app-context.ts';

const CreateCountdown: FC = () => {
  const { actions, state } = useContext(AppContext);

  return (
    <Modal
      open={state.modal}
      onClose={actions.toggleModal}>
      <Box>[MODAL]</Box>
    </Modal>
  );
};

export default CreateCountdown;
