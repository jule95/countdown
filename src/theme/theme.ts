import { createTheme } from '@mui/material/styles';

// ToDo: Move to separate declaration file (https://github.com/jule95/countdown/issues/7).
// eslint-disable-next-line quotes
declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }

  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}


const theme = createTheme({
  palette: {
    mode: `dark`,
  },
});

export default theme;
