import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

const AboutPage = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{
            color: 'primary.main',
            fontWeight: 'bold',
            mb: 6
          }}
        >
          About Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
                Our Mission
              </Typography>
              <Typography paragraph>
                We are dedicated to providing exceptional services and solutions
                to our clients. Our mission is to deliver innovative and sustainable
                results while maintaining the highest standards of excellence.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
                Our Vision
              </Typography>
              <Typography paragraph>
                To be the leading platform that connects professionals and
                creates opportunities for growth and success in their careers.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutPage;