import './LanguageSwitch.scss';
import { FC } from 'react';
import { ButtonBase } from '@mui/material';
import i18n from '../../i18n.ts';

const LanguageSwitch: FC = () => (
  <div className="LanguageSwitch">
    <ButtonBase
      disableRipple
      sx={{
        fontWeight: i18n.language === `de` ? `bold` : `normal`,
        marginRight: `4px`,
      }}
      onClick={() => i18n.changeLanguage(`de`)}>DE</ButtonBase>
    <span>/</span>
    <ButtonBase
      disableRipple
      sx={{
        fontWeight: i18n.language === `en` ? `bold` : `normal`,
        marginLeft: `4px`,
      }}
      onClick={() => i18n.changeLanguage(`en`)}>EN</ButtonBase>
  </div>
);

export default LanguageSwitch;
