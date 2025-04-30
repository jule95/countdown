import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch.tsx';

const Navbar = () => (
  <AppBar position="absolute">
    <Toolbar variant="dense">
      <Box sx={{ marginLeft: `auto` }}>
        <LanguageSwitch />
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar;
