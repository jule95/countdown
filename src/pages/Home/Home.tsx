import Countdown from '../../components/Countdown/Countdown.tsx';
import './Home.scss';
import { useContext } from 'react';
import AppContext from '../../state/app-context.ts';
import { Typography } from '@mui/material';

const Home = () => {
  const { state } = useContext(AppContext);

  return (
    <div className="Home">
      <div className="Home__content">
        <Typography 
          className="Home__content-title" 
          variant="h1">{state.countdown.title}</Typography>
        <Countdown />
      </div>
    </div>
  );
};
export default Home;
