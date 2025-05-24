import Countdown from '../../components/Countdown/Countdown.tsx';
import { useContext, useEffect } from 'react';
import AppContext from '../../state/app-context.ts';
import { Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import useCountdown from '../../api/useCountdown.ts';
import { IResponseCountdown } from '../../common/interfaces/api.countdown.interfaces.ts';
import Box from '@mui/material/Box';
import { sxHome, sxHomeContent, sxHomeTitle } from './Home.styles.ts';

const Home = () => {
  const { actions, state } = useContext(AppContext);
  const { id } = useParams();
  const [apiActions, apiState] = useCountdown();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      navigate(`/0`);
      return;
    }

    void apiActions.getCountdown({ id });
  }, [id]);

  useEffect(() => {
    if (!apiState.response) {
      return;
    }

    const response = apiState.response as IResponseCountdown;

    actions.setCountdown({
      target: new Date(response.target),
      title: response.title,
    });
  }, [apiState.response]);

  return (
    <Box
      alignItems="center"
      display="flex"
      justifyContent="center"
      sx={sxHome}>
      <Box sx={sxHomeContent}>
        <Typography
          sx={sxHomeTitle}
          variant="h2">
          {state.countdown.title}
        </Typography>
        <Countdown />
      </Box>
    </Box>
  );
};
export default Home;
