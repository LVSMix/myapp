import { Button, MenuItem, MenuList, Menu, ListItemIcon, ListItemText} from "@mui/material";
import Save from "@mui/icons-material/Save";
import Share from "@mui/icons-material/Share";
import React, {Link} from "react";
import { useState } from "react";

function MenuBar(){
  const [menu, setMenu] = useState(null);
  const open = Boolean(menu);
  const handleClick = (e) => {
        setMenu(e.currentTarget);
  };

    return(
      <center>
         <div>
           <h1 style={{ color: "green" }}>Bienvenidos</h1>
           <h2>Menu Navigation</h2>
         </div>
         <div>
         <Button
            id="button"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            color="secondary"
            variant="contained"
         >
         open
         </Button>  
         <Menu  id="menu"
                anchorEl={menu}
                open={open}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
          }}>
            <MenuList>
               <MenuItem component={Link} to='/platillos'>
                  <ListItemIcon><Save fontSize="small" /></ListItemIcon>
                  <ListItemText>Platillos</ListItemText>
               </MenuItem>
               <MenuItem component={Link} to='/paises'>
                  <ListItemIcon>
                      <Share fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Paises</ListItemText>
              </MenuItem>
            </MenuList>
          </Menu>
         </div>
      </center>
    )
}

export default MenuBar;