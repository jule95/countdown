import './LanguageSwitch.scss';
import { FC } from 'react';
import { ButtonBase, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';

const LanguageSwitch: FC = () => {
  const { i18n } = useTranslation();

  return (
    <Box sx={{
      display: `flex`,
      flexDirection: `row`,
    }}>
      <ButtonBase
        disableRipple
        sx={{ fontWeight: i18n.language === `de` ? `bold` : `normal` }}
        onClick={() => i18n.changeLanguage(`de`)}>DE</ButtonBase>
      <Typography sx={{ margin: `0 4px` }}>/</Typography>
      <ButtonBase
        disableRipple
        sx={{ fontWeight: i18n.language === `en` ? `bold` : `normal` }}
        onClick={() => i18n.changeLanguage(`en`)}>EN</ButtonBase>
    </Box>
  );
};

export default LanguageSwitch;
