import './App.scss';
import { Outlet } from 'react-router-dom';
import './App.scss';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme/theme.ts';
import Navbar from './components/Navbar/Navbar.tsx';
import Toolbar from '@mui/material/Toolbar';
import CustomModal from './components/Modal/CustomModal.tsx';

const App = () => (
  <div className="App">
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Navbar />
      <Toolbar variant="dense" />
      <Container>
        <Outlet />
      </Container>
      <CustomModal title="[MODAL]" />
    </ThemeProvider>
  </div>
);

export default App;
