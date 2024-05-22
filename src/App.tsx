import './App.scss';
import { useTranslation } from 'react-i18next';
import { Link, Outlet } from 'react-router-dom';
import config from './config.ts';
import './App.scss';

const App = () => {
  const { t } = useTranslation();

  return (
    <div className="App">
      <div className="App__navbar">
        <Link to={config.routes.home}>{t(`page1`)}</Link>
        <Link to={config.routes.page2}>{t(`page2`)}</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default App;
