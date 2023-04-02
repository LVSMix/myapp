import { AppBar, IconButton, Toolbar, Typography, Menu, MenuItem,Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import {useNavigate} from "react-router-dom";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);    
  let history = useNavigate();
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  }; 
    
  const handleMenuClose = () => {      
    setAnchorEl(null);      
  };

  const handleClick = () => {
    history.push("/Configuration");
    
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >        
      <MenuItem onClick={handleMenuClose} component={Link} href="/">
         Home
      </MenuItem>
      <MenuItem className="menu-link-navbar" component={Link} href="/about">
         About
      </MenuItem>
      <MenuItem onClick={handleClick}>
        Configuration
      </MenuItem>
    </Menu>
  );

  return (
    <div className='root-navbar'>
      <AppBar position='static'>
         <Toolbar>
            <IconButton edge="start" className="menuButton" color="inherit" aria-label="open drawer" onClick={handleProfileMenuOpen}>
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className='title-navbar'>
                DashBoard
            </Typography>
            <IconButton color="inherit">
                <img src={require('../assets/img/branding.jpg')} width="40px" height="40px" className="imagen-navbar" />
            </IconButton>
            {renderMenu}
         </Toolbar>
      </AppBar>
    </div>
  )
}
