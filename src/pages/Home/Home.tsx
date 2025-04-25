import Countdown from '../../components/Countdown/Countdown.tsx';
import './Home.scss';

const Home = () => (
  <div className="Home">
    <div className="Home__content">
      <h2 className="Home__content-title">ENEI</h2>
      <Countdown />
    </div>
  </div>
);

export default Home;
