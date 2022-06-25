// React 
import React, { useState } from 'react';
// Mui Components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

// Mui others tool
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
// Others imports
import styles from './index.module.scss'
import menuItems from './menuItems';
import HandleMenuClick from './HandleMenuClick';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { navigate } = HandleMenuClick()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* LOGO */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              [theme.breakpoints.down('sm')]: {
                flexGrow: 1
              }
            }}
          >
            Covid-tracker
          </Typography>

          <div>
            {isMobile ? (
              <>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={() => setAnchorEl(null)}
                >
                  {menuItems.map((item) => {
                    const { menuTitle, url } = item
                    return (
                      <MenuItem key={menuTitle} onClick={() => navigate(url)}>
                        {menuTitle}
                      </MenuItem>)
                  })}
                </Menu>
              </>)
              : (
                <div className={styles.headerOptions}>
                  {menuItems.map((item) => {
                    const { menuTitle, url } = item
                    return (
                      <MenuItem key={menuTitle} onClick={() => navigate(url)}>
                        {menuTitle}
                      </MenuItem>)
                  })}
                </div>)
            }
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header