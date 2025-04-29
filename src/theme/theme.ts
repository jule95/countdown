import { createTheme } from '@mui/material/styles';
import { grey, orange } from '@mui/material/colors';

const theme = createTheme({
  countdown: {
    fillColor: orange[900],
    strokeColor: `#121212`,
  },
  palette: {
    mode: `dark`,
  },
  typography: {
    allVariants: {
      color: grey[300],
    },
  },
});

export default theme;
