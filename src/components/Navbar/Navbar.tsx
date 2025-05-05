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
        <Box sx={{
          display: `flex`,
          marginLeft: `auto`,
        }}>
          <ButtonBase
            disableRipple
            onClick={actions.toggleModal}>
            <AddBoxIcon sx={{ marginRight: `14px ` }} />
          </ButtonBase>
          <LanguageSwitch />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
