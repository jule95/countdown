import { SxProps } from '@mui/material';

// ToDo: Move to theme config.
export const modalStyles: SxProps = {
  ':focus-visible': {
    outline: `none`,
  },
  backgroundColor: `background.paper`,
  borderRadius: 1,
  boxShadow: 24,
  left: `50%`,
  p: 4,
  position: `absolute`,
  top: `50%`,
  transform: `translate(-50%, -50%)`,
};
