import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import MenuIcon from '@mui/icons-material/Menu';
import { Hamburgerdata } from './style';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
export default function Header() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 200, }} role="presentation" onClick={toggleDrawer(false)}>
      <Hamburgerdata>
      <Link to="/"><h1 color='blue'>Camper</h1></Link>
      <Link to="/motors"><p>Motor</p></Link>
      <Link to="/caravan"><p>Carvan</p></Link>
      <Link to="/tuning"><p>Tuning</p></Link>
      <Link to="/usedCar"><p>Used Car</p></Link>
      <Link to="/places"><p>Camping Places</p></Link>
      <Link to='/loginPage'>
        <Button>Sign in</Button>
      </Link>
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