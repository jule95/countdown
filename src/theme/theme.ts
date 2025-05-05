import { createTheme } from '@mui/material/styles';
import { grey, orange } from '@mui/material/colors';

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        sx: {
          width: `200px`,
        },
        variant: `outlined`,
      },
    },
    // ToDo: Extend type declarations in theme.d.ts.
    // @ts-expect-error TS2561
    MuiDateField: {
      defaultProps: {
        sx: { width: `220px` },
        variant: `standard`,
      },
    },
    MuiTextField: {
      defaultProps: {
        sx: { width: `220px` },
        variant: `standard`,
      },
    },
    MuiTimeField: {
      defaultProps: {
        sx: { width: `220px` },
        variant: `standard`,
      },
    },
  },
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
