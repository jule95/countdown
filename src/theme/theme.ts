import { createTheme } from '@mui/material/styles';
import { blue, grey, orange } from '@mui/material/colors';

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: { variant: `outlined` },
    },
    // ToDo: Extend type declarations in theme.d.ts.
    // @ts-expect-error TS2561
    MuiDateField: {
      defaultProps: {
        variant: `standard`,
      },
    },
    MuiFormControl: {
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: `15px`,
          marginBottom: `4px`,
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        variant: `standard`,
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: `standard`,
      },
    },
    MuiTimeField: {
      defaultProps: {
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
    primary: { main: orange[900] },
    secondary: { main: blue[500] },
  },
  typography: {
    allVariants: {
      color: grey[300],
    },
    h6: {
      lineHeight: 1,
    },
  },
});

export default theme;
