import React from 'react';
import { 
  Box, 
  Container, 
  Grid2, 
  Typography, 
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
        bgcolor: 'primary.dark',
        color: 'black',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid2 container spacing={4}>
          {/* Company Description */}
          <Grid2 size={8}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'secondary.dark' }}>
              About Our Company
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: 'secondary.main' }}>
              We are dedicated to providing exceptional services and solutions to our clients. 
              Our mission is to deliver innovative and sustainable results while maintaining 
              the highest standards of professional excellence.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, color: 'secondary.main' }}>
              <LocationOnIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
              <Typography variant="body2">
              17, Radha Mohan Colony, Khokadpura, Sambhaji Nagar
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, color: 'secondary.main' }}>
              <PhoneIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
              <Typography variant="body2">
                +91 9890009911
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', color: 'secondary.main' }}>
              <EmailIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
              <Typography variant="body2">
                support@kalpataru.com
              </Typography>
            </Box>
          </Grid2>

          {/* Quick Links */}
          <Grid2 size='grow'>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'secondary.dark' }}>
              Quick Links
            </Typography>
            <Link href="/kalpataru-app" color="inherit"
             sx={{ 
                  display: 'block', mb: 1, 
                  color: 'secondary.main', 
                  '&:hover': {
                    color: theme.palette.primary.light,
                    transition: 'all 0.3s ease'
                    },
                  }}>
              Home
            </Link>
            <Link href="/kalpataru-app/signup" color="inherit"   sx={{ 
                  display: 'block', mb: 1, 
                  color: 'secondary.main', 
                  '&:hover': {
                    color: theme.palette.primary.light,
                    transition: 'all 0.3s ease'
                    },
                  }}>
              Create Profile
            </Link>
            <Link href="/kalpataru-app/about" color="inherit"   sx={{ 
                  display: 'block', mb: 1, 
                  color: 'secondary.main', 
                  '&:hover': {
                    color: theme.palette.primary.light,
                    transition: 'all 0.3s ease'
                    },
                  }}>
              About Us
            </Link>
            <Link href="/kalpataru-app/contact" color="inherit"   sx={{ 
                  display: 'block', mb: 1, 
                  color: 'secondary.main', 
                  '&:hover': {
                    color: theme.palette.primary.light,
                    transition: 'all 0.3s ease'
                    },
                  }}>
              Contact
            </Link>
            {/* <Link href="/signin" color="inherit" sx={{ display: 'block',mb: 1, color: 'primary.light'  }}>
              Sign In
            </Link>
            <Link href="/signup" color="inherit" sx={{ display: 'block' }}>
              Sign Up
            </Link> */}
          </Grid2>

          {/* Email Inquiry Section */}
          {/* <Grid2 item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'secondary.dark' }}>
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
                  bgcolor: 'secondary.dark',
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

        <Divider sx={{ my: 4, bgcolor: 'secondary.dark' }} />
        
        {/* Copyright Section */}
        <Typography 
          variant="body2" 
          align="center"
          sx={{ 
            pt: 0.1,
            opacity: 0.8,
            bgcolor: 'primary.dark',
          }}
        >
          © {currentYear} RiJi Creations. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;