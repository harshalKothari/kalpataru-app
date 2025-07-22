import React from 'react';
import { 
  Box, 
  Container, 
  Grid2, 
  Typography, 
  TextField, 
  Button,
  Link,
  Divider,
  useTheme
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  // const handleEmailSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle email submission logic here
  //   console.log('Email submitted');
  // };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.light',
        color: 'black',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid2 container spacing={4}>
          {/* Company Description */}
          <Grid2 size={8}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              About Our Company
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              We are dedicated to providing exceptional services and solutions to our clients. 
              Our mission is to deliver innovative and sustainable results while maintaining 
              the highest standards of professional excellence.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationOnIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
              <Typography variant="body2">
              17, Radha Mohan Colony, Khokadpura, Sambhaji Nagar
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
              <Typography variant="body2">
                +91 9890009911
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <EmailIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
              <Typography variant="body2">
                support@kalpataru.com
              </Typography>
            </Box>
          </Grid2>

          {/* Quick Links */}
          <Grid2 size='grow'>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" sx={{ display: 'block', mb: 1 }}>
              Home
            </Link>
            <Link href="/about" color="inherit" sx={{ display: 'block', mb: 1 }}>
              About Us
            </Link>
            <Link href="/contact" color="inherit" sx={{ display: 'block', mb: 1 }}>
              Contact
            </Link>
            {/* <Link href="/signin" color="inherit" sx={{ display: 'block', mb: 1 }}>
              Sign In
            </Link>
            <Link href="/signup" color="inherit" sx={{ display: 'block' }}>
              Sign Up
            </Link> */}
          </Grid2>

          {/* Email Inquiry Section */}
          {/* <Grid2 item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              Stay Connected
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Subscribe to our newsletter for updates and news.
            </Typography>
            <Box component="form" onSubmit={handleEmailSubmit}>
              <TextField
                fullWidth
                placeholder="Enter your email"
                variant="outlined"
                size="small"
                sx={{
                  mb: 2,
                  bgcolor: 'white',
                  borderRadius: 1,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'transparent',
                    },
                    '&:hover fieldset': {
                      borderColor: 'transparent',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'transparent',
                    },
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: 'primary.main',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                  },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid2> */}
        </Grid2>

        <Divider sx={{ my: 4, bgcolor: 'primary.main' }} />
        
        {/* Copyright Section */}
        <Typography 
          variant="body2" 
          align="center"
          sx={{ 
            pt: 0.1,
            opacity: 0.8,
            bgcolor: 'primary.light',
          }}
        >
          © {currentYear} RiJi Creations. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;