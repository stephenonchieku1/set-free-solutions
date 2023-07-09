import {
  AppBar,
  Typography,
  Box,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Drawer,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import ElevationScroll from './ElevationScroll';
import MenuIcon from '@mui/icons-material/Menu';
import useStyles from '../utils/muiStyles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { showToast } from '../utils/functions';

const Nav = (props) => {
  const classes = useStyles();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const user = useSelector((state) => state.user.user);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setMobileMenu(open);
  };

  useEffect(() => {
    user.id ? setLoggedIn(true) : setLoggedIn(false);
  }, [user.id]);

  const signOut = () => {
    window.location.reload(false);
    showToast('success', 'Goodbye!👋');
  };
  const list = (anchor) => (
    <Box
   
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <Link to='/'>
        <ListItem button>
          <ListItemText primary='Home'/>
        </ListItem>
        </Link>
        <ListItem button component={Link} to="/contacts">
          <ListItemText primary="Contacts" />
        </ListItem>
        <ListItem button component={Link} to="/about">
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={Link} to="/services">
          <ListItemText primary="Services" />
          </ListItem>
       
        {loggedIn ? (
          <ListItem button onClick={() => signOut()}>
            <ListItemText primary="Sign Out" />
          </ListItem>
        ) : (
          <Link to="/login">
            <ListItem button>
              <ListItemText primary="Log in" />
            </ListItem>
          </Link>
        )}
      </List>
    </Box>
  );

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ marginBottom: '70px',
     color:"primary"}}>
      <ElevationScroll {...props}>
        <AppBar className={classes.navbar} sx={{color:'primary'}} color='primary' >
          <Toolbar className={classes.toolBar}>
            <Link to="/">
              {matches ? (
                <Typography variant="h6" className={classes.logo}>
                  Set Free Solutions
                </Typography>
              ) : (
                <Typography variant="h5" className={classes.logo}>
                Set Free Solutions
                </Typography>
              )}
            </Link>

            {matches ? (
              <Box>
                <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon className={classes.menuIcon} fontSize="large" />
                </IconButton>

                <Drawer
                  anchor="right"
                  open={mobileMenu}
                  onClose={toggleDrawer(false)}
                >
                  {list('right')}
                </Drawer>
              </Box>
            ) : (
            
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexGrow: '0.05',
                  padding:'20px',
                }}
              
              >                 
                    <Link to="/" className={classes.link}>
                    Home
                  </Link>
                  <Link to="/contacts" className={classes.link}>
                    Contacts
                  </Link>
                  <Link to="/about" className={classes.link}>
                    About
                  </Link>
                  <Link to="/services" className={classes.link}>
                    Services
                  </Link> 
                {loggedIn ? (
                  <Typography
                    className={classes.link}
                    onClick={() => signOut()}
                  >
                    Sign Out
                  </Typography>
                ) : (              
                
                 
                  <Link to="/login">
                    <Typography className={classes.link}> Admin Log in</Typography>
                  </Link>
                )}
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </Box>
  );
};

export default Nav;