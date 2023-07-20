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
               
        {loggedIn ? (
          <Box>
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
          <ListItem button onClick={() => signOut()}>
            <ListItemText primary="Sign Out" />
          </ListItem>
          </Box>
        ) : (
          <Box>
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
          <Link to="/login">
            <ListItem button>
              <ListItemText primary="Log in" />
            </ListItem>
          </Link>
          </Box>
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
                 
                {loggedIn ? (
                  <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexGrow: '0.05',
                    width:"100%",
                  }}>                 
                   
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
                 
                  <Typography
                    className={classes.link}
                    onClick={() => signOut()}
                  >
                    Sign Out
                  </Typography>
                  </Box>
                ) : (              
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexGrow: '0.05',
                  width:"100%",
                }} >                
                                  
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
                 <Link to="/login">
                            <button
                              type="button"                              
                              class=" bg-blue-500 mr-3 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                              Admin Login
                            </button>
                 
                  </Link>
                 </Box>
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
<nav class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="https://setfreesolutions.co.ke" class="flex items-center">
            
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Setfree Solutions</span>
        </a>
        <button data-collapse-toggle="mega-menu-full-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full-cta" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div id="mega-menu-full-cta" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul class="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                <li>
                    <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                </li>
                <li>
                    <button id="mega-menu-full-cta-dropdown-button" data-dropdown-toggle="mega-menu-full-cta-dropdown" data-dropdown-placement="bottom" class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Company <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
                </li>
                <li>
                    <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
                </li>
                <li>
                    <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Resources</a>
                </li>
                <li>
                    <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                </li>
            </ul>
        </div>
    </div>
    <div id="mega-menu-full-cta-dropdown" class="mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600">
        <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
            <ul class="space-y-4 sm:mb-4 md:mb-0" aria-labelledby="mega-menu-full-cta-button">
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Online Stores
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Segmentation
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Marketing CRM
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Online Stores
                    </a>
                </li>
            </ul>
            <ul class="hidden mb-4 space-y-4 md:mb-0 sm:block">
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Our Blog
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Terms & Conditions
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        License
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Resources
                    </a>
                </li>
            </ul>
            <div class="mt-4 md:mt-0">
                <h2 class="mb-2 font-semibold text-gray-900 dark:text-white">Our brands</h2>
                <p class="mb-2 text-gray-500 dark:text-gray-400">At Flowbite, we have a portfolio of brands that cater to a variety of preferences.</p>
                <a href="#" class="inline-flex items-center text-sm font-medium text-blue-600 hover:underline hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-700">
                    Explore our brands 
                    <span class="sr-only">Explore our brands </span>
                    <svg class="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</nav>
