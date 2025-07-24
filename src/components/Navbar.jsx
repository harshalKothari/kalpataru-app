import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LoginIcon from '@mui/icons-material/Login';
import Logout from '@mui/icons-material/Logout';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isLandingPage = location.pathname === '/kalpataru-app/' || location.pathname === '/kalpataru-app';
  const isSignInPage = location.pathname === '/kalpataru-app/signin/' || location.pathname === '/kalpataru-app/signin';
  
  console.log("?/////////", isSignInPage);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    // { name: 'Sign In', path: '/kalpataru-app/signin', icon: <LoginIcon /> },
    { name: 'Dashboard', path: '/kalpataru-app/user-dashboard', icon: <DashboardIcon /> },
     { name: 'Create Profile', path: '/kalpataru-app/signup', icon: <PersonAddIcon /> },
    { name: 'About', path: '/kalpataru-app/about', icon: <InfoIcon /> },
     { name: 'Contact', path: '/kalpataru-app/contact', icon: <ContactMailIcon /> },
     { name: 'Logout', path: '/', icon: <Logout /> },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{
        bgcolor: isLandingPage && !isScrolled ? 'transparent' :  isLandingPage ? 'transparent' : 'primary.light',
        boxShadow: isLandingPage && !isScrolled ? 'none' : 1,
        transition: 'all 0.3s ease',
      }}
    >
     {  (!isSignInPage)?
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Dancing Script, cursive',
              fontOpticalSizing: 'auto',
              fontStyle: 'normal',
              flexGrow: { xs: 1, md: 0 },
              color: 'secondary.dark',
              fontWeight: 700,
              cursor: 'pointer',
              mr: 3
            }}
            onClick={() => handleNavigation('/kalpataru-app/user-dashboard')}
          >
            <i>Kalpataru logo</i>
          </Typography>
           
          <Box sx={{ 
            flexGrow: 1, 
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'flex-end'
          }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                startIcon={item.icon}
                sx={{
                  color: isLandingPage && !isScrolled ? 'primary.light' : isLandingPage ? 'primary.light' : 'primary.main',
                  mx: 1,
                  px: 2,
                  '&:hover': {
                    bgcolor: 'primary.dark',
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box> 
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => setMobileOpen(true)}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
: null}

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 250,
            bgcolor: 'primary.dark',
            color: 'secondary.light'
          }
        }}
      >
        <List sx={{ pt: 3 }}>
          {navItems.map((item) => (
            <ListItem 
              key={item.name}
              onClick={() => handleNavigation(item.path)}
              sx={{
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
                transition: 'all 0.3s ease',
                mx: 1,
                borderRadius: 1,
                mb: 1
              }}
            >
              <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;