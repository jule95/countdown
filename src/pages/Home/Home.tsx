import Countdown from '../../components/Countdown/Countdown.tsx';
import './Home.scss';
import { useContext, useEffect } from 'react';
import AppContext from '../../state/app-context.ts';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import useCountdown from '../../api/useCountdown.ts';
import { IResponseCountdown } from '../../common/interfaces/api.countdown.interfaces.ts';
import useLocalStorage from '../../hooks/useLocalStorage.ts';
import { ELocalStorageKeys } from '../../common/enums/ls.enums.ts';
import { ILocalStorageCountdown } from '../../common/interfaces/ls.interfaces.ts';

const Home = () => {
  const { actions, state } = useContext(AppContext);
  const { id } = useParams();
  const [apiActions, apiState] = useCountdown();
  const [localCountdown, setLocalCountdown] = useLocalStorage<ILocalStorageCountdown>(ELocalStorageKeys.COUNTDOWN, null);


  useEffect(() => {
  }, [id]);

  useEffect(() => {
  }, [apiState.response]);

  useEffect(() => {
  }, [localCountdown]);

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
