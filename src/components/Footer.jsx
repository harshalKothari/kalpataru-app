import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
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

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Handle email submission logic here
    console.log('Email submitted');
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Description */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
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
                123 Business Street, Suite 100, City, Country
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
              <Typography variant="body2">
                +1 234 567 8900
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <EmailIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
              <Typography variant="body2">
                contact@yourcompany.com
              </Typography>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
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
            <Link href="/signin" color="inherit" sx={{ display: 'block', mb: 1 }}>
              Sign In
            </Link>
            <Link href="/signup" color="inherit" sx={{ display: 'block' }}>
              Sign Up
            </Link>
          </Grid>

          {/* Email Inquiry Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
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
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: 'rgba(255, 255, 255, 0.1)' }} />
        
        {/* Copyright Section */}
        <Typography 
          variant="body2" 
          align="center"
          sx={{ 
            pt: 2,
            opacity: 0.8
          }}
        >
          © {currentYear} Your Company Name. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;