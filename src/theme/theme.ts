import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const theme = createTheme({
  countdown: {
    fillColor: `#BF360C`,
    strokeColor: `#121212`,
  },
  palette: {
    mode: `dark`,
  },
  typography: {
    allVariants: {
      color: grey[100],
    },
  },
});

export default theme;
