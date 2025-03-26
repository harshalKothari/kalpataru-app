import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const HeroSection = () => {
  const items = [
    {
      title: "Find Your Perfect Match",
      description: "Connect with like-minded individuals and start your journey",
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Discover Real Connections",
      description: "Build meaningful relationships that last a lifetime",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Begin Your Love Story",
      description: "Your happily ever after starts here",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }
  ];

  return (
    <Box 
      sx={{ 
        width: '100%',
              height: '100vh',
        marginTop: { xs: '-56px', sm: '-64px' }, // Compensate for navbar height
            }}
          >
      <Carousel
        animation="slide"
        interval={5000}
        indicators={true}
        navButtonsAlwaysVisible={true}
                sx={{
          height: '100%',
                }}
        navButtonsProps={{
          style: {
            backgroundColor: '#730a3d',
            opacity: 0.7,
                    '&:hover': {
              opacity: 0.9,
            }
          }
                  }}
        indicatorContainerProps={{
          style: {
            position: 'absolute',
            bottom: '20px',
            zIndex: 2,
          }
        }}
        indicatorIconButtonProps={{
          style: {
            color: '#ffffff',
            '&.Mui-selected': {
              color: '#730a3d'
            }
          }
        }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              height: '100vh',
              width: '100%',
              position: 'relative',
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              paddingTop: { xs: '56px', sm: '64px' }, // Add padding for navbar
            }}
          >
            <Container maxWidth="lg">
              <Box
                sx={{
                  color: 'white',
                  textAlign: 'center',
                  maxWidth: '800px',
                  margin: '0 auto',
                  p: 2,
                  animation: 'fadeIn 1s ease-in',
                  '@keyframes fadeIn': {
                    '0%': {
                      opacity: 0,
                      transform: 'translateY(20px)',
                    },
                    '100%': {
                      opacity: 1,
                      transform: 'translateY(0)',
                    },
                  },
                  }}
                >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', sm: '4rem', md: '5rem' },
                    fontWeight: 'bold',
                    mb: 2,
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    fontSize: { xs: '1.2rem', sm: '1.5rem' },
                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                  }}
                >
                  {item.description}
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: '#730a3d',
                    '&:hover': {
                      bgcolor: '#4CAF50',
                    },
                    px: 4,
                    py: 1.5,
                    transition: 'all 0.3s ease',
                    fontSize: { xs: '1rem', sm: '1.2rem' },
                  }}
                >
                  Get Started
                </Button>
    </Box>
            </Container>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default HeroSection;