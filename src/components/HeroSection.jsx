import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { useNavigate } from 'react-router-dom';
import one  from "../assets/one.jpg";
import two  from "../assets/two.jpg";
import three  from "../assets/three.jpg";
import four  from "../assets/four.jpg";
import five  from "../assets/five.jpg";
const HeroSection = () => {
  const navigate = useNavigate();
  const items = [
    {
      title: "Find Your Perfect Match",
      description: "Connect with like-minded individuals and start your journey",
      image: one,
    },
    {
      title: "Discover Real Connections",
      description: "Build meaningful relationships that last a lifetime",
      image: two,
    },
    {
      title: "Begin Your Story",
      description: "Your happily ever after starts here",
      image: three,
    },
    {
      title: "Meet your Soulmate",
      description: "Where hearts meet, stories begin.",
      image: four,
    },
    {
      title: "Perfect Match",
      description: "Your perfect match is waiting.",
      image: five,
    }
  ];


  const getStarted = () => {
  navigate("/signup")
};

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
            backgroundColor: 'primary.main',
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
            '&.MuiSelected': {
              color: 'primary.main'
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
              position: 'absolute',
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
                  variant="h2"
                  sx={{
                    fontSize: { xs: '2.5rem', sm: '2rem', md: '3rem' },
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
                  onClick={() => getStarted({ open: false, id: null })}
                  size="large"
                    style={{ 
                        "background-image": "linear-gradient(to right, #BE5985, #B73A3A)"
                      }}
                  sx={{
                    bgcolor: 'primary.main',
                    '&:hover': {
                      bgcolor: 'primary.dark',
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