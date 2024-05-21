import './App.scss';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t } = useTranslation();

  return (
    <div>{t(`hello`)}</div>
  );
};

export default App;
