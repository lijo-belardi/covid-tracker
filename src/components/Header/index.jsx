// React 
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Mui Components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Button } from '@mui/material';
// Mui others tool
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
// Others imports
import styles from './index.module.scss'

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    navigate(pageURL)
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              [theme.breakpoints.down('sm')]: {
                flexGrow: 1 
              }
            }}
          >
            Photos
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
                  <MenuItem onClick={() => handleMenuClick('/')}>Home</MenuItem>
                  <MenuItem onClick={() => handleMenuClick('/countries/usa')}>USA - Page</MenuItem>
                  <MenuItem onClick={() => handleMenuClick('/countries/italy')}>Italy - Page</MenuItem>
                  <MenuItem onClick={() => handleMenuClick('/continents')}>Continents</MenuItem>
                </Menu>
              </>)
              : (
                <div className={styles.headerOptions}>
                  <Button color='error' variant='contained'>Home</Button>
              
                </div>)
            }

          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header