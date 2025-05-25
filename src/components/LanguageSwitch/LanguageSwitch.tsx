import { FC } from 'react';
import { Box, FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { options } from './LanguageSwitch.config.ts';
import LanguageIcon from '@mui/icons-material/Language';
import { sxSelect } from './LanguageSwitch.styles.ts';

const LanguageSwitch: FC = () => {
  const { t, i18n } = useTranslation();

  const handleChange = (event: SelectChangeEvent) => {
    void i18n.changeLanguage(event.target.value);
  };

  return (
    <Box
      alignItems="center"
      display="flex">
      <FormControl>
        <Select
          IconComponent={() => null}
          sx={sxSelect}
          value={i18n.language}
          onChange={handleChange}>
          {options.map(option => (
            <MenuItem
              sx={{ fontSize: `14px` }}
              value={option.value}>{t(option.label)}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <LanguageIcon sx={{ fontSize: `20px` }} />
    </Box>
  );
};

export default LanguageSwitch;
