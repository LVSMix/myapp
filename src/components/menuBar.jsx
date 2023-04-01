import React from 'react';
import {Button, Menu, MenuItem, Link} from "@mui/material";

export function MenuBar(){
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return(
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><a href="/paises">Paises</a></MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
    </Menu>
  </div>
  )    
}

export default MenuBar;