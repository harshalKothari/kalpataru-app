import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid2, 
  Paper 
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const ContactPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

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
          Contact Us
        </Typography>
        <Grid2 container spacing={4}>
          {/* <Grid2 size={12}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
                Get in Touch
              </Typography>
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid2 container spacing={2}>
                  <Grid2 item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      required
                    />
                  </Grid2>
                  <Grid2 item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      required
                    />
                  </Grid2>
                  <Grid2 item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      required
                    />
                  </Grid2>
                  <Grid2 item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      multiline
                      rows={4}
                      required
                    />
                  </Grid2>
                </Grid2>
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  sx={{
                    mt: 3,
                    mb: 2,
                    bgcolor: 'primary.main',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Grid2> */}
          <Grid2 size={12}>
            <Paper elevation={3} sx={{ p: 8 }}>
              <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
                Contact Information
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationOnIcon sx={{ color: 'primary.main', mr: 2 }} />
                  <Typography>
                    17, Radha Mohan Colony, Khokadpura, Sambhaji Nagar
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PhoneIcon sx={{ color: 'primary.main', mr: 2 }} />
                  <Typography>
                    +1 234 567 8900
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <EmailIcon sx={{ color: 'primary.main', mr: 2 }} />
                  <Typography>
                    support@kalpataru.com
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default ContactPage;