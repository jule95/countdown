import './App.scss';
import { Outlet } from 'react-router-dom';
import './App.scss';
import { Container } from '@mui/material';

const App = () => (
  <div className="App">
    <Container>
      <Outlet />
    </Container>
  </div>
);

export default App;
