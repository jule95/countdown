import './App.scss';
import { Outlet } from 'react-router-dom';
import './App.scss';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme/theme.ts';

const App = () => (
  <div className="App">
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  </div>
);

export default App;
