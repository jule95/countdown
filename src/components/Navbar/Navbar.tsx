import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch.tsx';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { ButtonBase } from '@mui/material';
import { useContext } from 'react';
import AppContext from '../../state/app-context.ts';

const Navbar = () => {
  const { actions } = useContext(AppContext);

  return (
    <AppBar position="absolute">
      <Toolbar variant="dense">
        <Box
          display="flex"
          flexDirection="row"
          gap={2}
          sx={{ marginLeft: `auto` }}>
          <LanguageSwitch />
          <ButtonBase
            disableRipple
            onClick={actions.toggleModal}>
            <AddBoxIcon />
          </ButtonBase>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
