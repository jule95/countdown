import Countdown from '../../components/Countdown/Countdown.tsx';
import './Home.scss';
import { useContext } from 'react';
import AppContext from '../../state/app-context.ts';

const Home = () => {
  const { state } = useContext(AppContext);

  return (
    <div className="Home">
      <div className="Home__content">
        <h2 className="Home__content-title">{state.title}</h2>
        <Countdown />
      </div>
    </div>
  );
};
export default Home;
