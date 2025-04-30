import './App.scss';
import { Outlet } from 'react-router-dom';
import './App.scss';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme/theme.ts';
import Navbar from './components/Navbar/Navbar.tsx';
import Toolbar from '@mui/material/Toolbar';

const App = () => (
  <div className="App">
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Navbar />
      <Toolbar />
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  </div>
);

export default App;
