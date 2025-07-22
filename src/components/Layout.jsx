import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
      <Navbar />
      <Box sx={{ 
        flexGrow: 1,
        display: 'flex',
        pt: { xs: '56px', sm: '64px' } // Compensate for navbar height
      }}>
        {children}
      </Box>
      
    </Box>
  );
};

export default Layout;