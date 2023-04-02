import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'

export default function Navbar() {
  return (
    <div className='root-navbar'>
      <AppBar position='static'>
         <Toolbar>
            <IconButton edge="start" className="menuButton" color="inherit">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className='title-navbar'>
                DashBoard
            </Typography>
            <IconButton color="inherit">
                <img src={require('../assets/img/branding.jpg')} width="40px" height="40px" className="imagen-navbar" />
            </IconButton>
         </Toolbar>
      </AppBar>
    </div>
  )
}
