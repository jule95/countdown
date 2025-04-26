import '@mui/material/styles';

// eslint-disable-next-line quotes
declare module '@mui/material/styles' {
  interface Theme {
    countdown: {
      fillColor: string;
      strokeColor: string;
    };
    status: {
      danger: string;
    };
  }

  interface ThemeOptions {
    countdown?: {
      fillColor?: string;
      strokeColor?: string;
    };
    status?: {
      danger?: string;
    };
  }
}