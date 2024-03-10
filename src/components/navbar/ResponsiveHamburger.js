import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import MenuIcon from '@mui/icons-material/Menu';
import { Hamburgerdata } from './style';
export default function Header() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 200, }} role="presentation" onClick={toggleDrawer(false)}>
      <Hamburgerdata>
        <h3>JobHub</h3>
        <p>All Jobs </p>
        <p>Internship</p>
        <p>Internship</p>
        <p>Engineering</p>
        <p>Marketer</p> 
        <p>Designer</p>
      </Hamburgerdata>
    </Box>
  );

  return (
    <div>
      <MenuIcon onClick={toggleDrawer(true)}/>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}