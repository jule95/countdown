import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { FC, useContext } from 'react';
import AppContext from '../../state/app-context.ts';
import { Typography } from '@mui/material';
import { IModalProps } from './CustomModal.types.ts';

const CustomModal: FC<IModalProps> = props => {
  const { actions, state } = useContext(AppContext);

  return (
    <Modal
      open={state.modal}
      onClose={actions.toggleModal}>
      <Box>
        <Typography>{props.title}</Typography>
      </Box>
    </Modal>
  );
};

export default CustomModal;
