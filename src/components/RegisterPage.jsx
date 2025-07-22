import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Link,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid2,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Person,
  School,
  Cake,
  Public,
  LocationCity,
  Google,
  Facebook,
} from '@mui/icons-material';

const countries = ['India', 'USA', 'Canada', 'UK', 'Australia'];
const states = {
  India: ['Maharashtra', 'Gujarat', 'Rajasthan', 'Delhi', 'Karnataka'],
  USA: ['California', 'New York', 'Texas', 'Florida'],
};
const cities = {
  Maharashtra: ['Mumbai', 'Pune', 'Nagpur', 'Nashik'],
  Gujarat: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot'],
};


const PageContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  borderRadius: '16px',
  width: '80%',
  backgroundColor: '#ffffff',
  maxWidth: '100vw',
  maxHeight: '130%',
  position: 'absolute',
  transform: 'translate(0, -50%)',
  // marginRight: '6%'
}));

const SocialButton = styled(Button)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  padding: theme.spacing(1.5),
  width: '100%',
  borderRadius: '8px',
  textTransform: 'none',
  fontSize: '1rem',
  border: '1px solid #e0e0e0',
                '&:hover': {
    backgroundColor: '#f5f5f5',
                },
}));

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    religion: '',
    education: '',
    country: '',
    state: '',
    city: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newData = { ...prev, [name]: value };
      
      if (name === 'country') {
        newData.state = '';
        newData.city = '';
      } else if (name === 'state') {
        newData.city = '';
      }
      
      return newData;
    });
};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration attempt:', formData);
  };

  return (
    <PageContainer>
      <Container>
        <StyledPaper elevation={5}>
          <Typography component="h3" variant="h5" gutterBottom sx={{ fontWeight: 300,fontWeight: 'bold', textAlign: 'center',color: 'primary.main' }}>
           REGISTER NEW MEMBER
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
            Join our community and find your perfect match
          </Typography>

          {/* <Grid2 container spacing={2} sx={{ mb: 3 }}>
            <Grid2 item xs={12} sm={6}>
              <SocialButton startIcon={<Google sx={{ color: 'primary.main' }} />}>
                Sign up with Google
              </SocialButton>
            </Grid2>
            <Grid2 item xs={12} sm={6}>
              <SocialButton startIcon={<Facebook sx={{ color: 'primary.main' }} />}>
                Sign up with Facebook
              </SocialButton>
            </Grid2>
          </Grid2> */}

          {/* <Divider sx={{ width: '100%', mb: 3 }}>or</Divider> */}

          <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
            <Grid2 container spacing={2}>
              <Grid2 size={4}>
                <TextField
                  required
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: <Person sx={{ mr: 1, color: 'primary.main' }} />,
                  }}
                />
              </Grid2>
              <Grid2 size={4}>
                <TextField
                  fullWidth
                  label="Middle Name"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                />
              </Grid2>
              <Grid2 size={4}>
                <TextField
                  required
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Grid2>

              <Grid2 size={4}>
                <FormControl fullWidth required>
                  <InputLabel>Gender</InputLabel>
                  <Select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    label="Gender"
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                  </Select>
                </FormControl>
              </Grid2>

              <Grid2 size={4}>
                <TextField
                  required
                  fullWidth
                  label="Date of Birth"
                  name="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: <Cake sx={{ mr: 1, color: 'primary.main' }} />,
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid2>

              {/* <Grid2 item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Religion"
                  name="religion"
                  value={formData.religion}
                  onChange={handleChange}
                />
              </Grid2> */}

              <Grid2 item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Education"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: <School sx={{ mr: 1, color: 'primary.main' }} />,
                  }}
                />
              </Grid2>

              <Grid2 size={4}>
                <FormControl fullWidth required>
                  <InputLabel>Country</InputLabel>
                  <Select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    label="Country"
                    startAdornment={<Public sx={{ mr: 1, color: 'primary.main' }} />}
                  >
                    {countries.map((country) => (
                      <MenuItem key={country} value={country}>{country}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid2>

              <Grid2 size={4}>
                <FormControl fullWidth required disabled={!formData.country}>
                  <InputLabel>State</InputLabel>
                  <Select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    label="State"
                  >
                    {formData.country && states[formData.country]?.map((state) => (
                      <MenuItem key={state} value={state}>{state}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid2>

              <Grid2 size={4}>
                <FormControl fullWidth required disabled={!formData.state}>
                  <InputLabel>City</InputLabel>
                  <Select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    label="City"
                    startAdornment={<LocationCity sx={{ mr: 1, color: 'primary.main' }} />}
                  >
                    {formData.state && cities[formData.state]?.map((city) => (
                      <MenuItem key={city} value={city}>{city}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid2>
            </Grid2>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              style={{ 
                        "background-image": "linear-gradient(to right, #BE5985, #B73A3A)"
                      }}
              sx={{
                mt: 4,
                mb: 2,
                backgroundColor: 'primary.main',
                '&:hover': {
                  backgroundColor: '#5c082f',
                },
              }}
            >
              Create Profile
            </Button>

            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Already have an account?{' '}
                <Link href="/signin" variant="body2" underline="hover" sx={{ fontWeight: 600, color: 'primary.main' }}>
                  Sign In
                </Link>
              </Typography>
            </Box>
          </Box>
        </StyledPaper>
      </Container>
    </PageContainer>
  );
};

export default RegisterPage;