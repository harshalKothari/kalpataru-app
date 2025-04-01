import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Paper,
  Slider,
  RadioGroup,
  FormControlLabel,
  Radio,
  Autocomplete,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState([18, 60]);
  const [city, setCity] = useState(null);
  const [showResults, setShowResults] = useState(false);

  // Sample data for cities
  const cities = [
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Hyderabad',
    'Chennai',
    'Kolkata',
    'Pune',
    'Ahmedabad',
    'Jaipur',
    'Surat',
    'Lucknow',
    'Kanpur',
    'Nagpur',
    'Indore',
    'Thane',
  ];

  const handleAgeChange = (event, newValue) => {
    setAge(newValue);
  };

  const handleSearch = () => {
    const searchCriteria = {
      searchQuery,
      gender,
      age,
      city,
    };
    setShowResults(true);
    // Pass the search criteria to parent component or handle search logic
  };

  return (
    <Box
      sx={{
        py: 8,
        bgcolor: '#f5f5f5',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{
            color: 'primary.main',
            fontWeight: 'bold',
            mb: 6,
            fontSize: { xs: '2rem', md: '3rem' },
          }}
        >
          Find Your Match
        </Typography>

        <Paper
          elevation={3}
          sx={{
            p: { xs: 2, md: 4 },
            borderRadius: 2,
          }}
        >
          <Grid container spacing={3}>
            {/* Main Search Bar */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name..."
                InputProps={{
                  startAdornment: <SearchIcon sx={{ color: 'primary.main', mr: 1 }} />,
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: 'primary.main',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'primary.main',
                    },
                  },
                }}
              />
            </Grid>

            {/* Filters Header */}
            <Grid item xs={12}>
              <Typography
                variant="h6"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  color: 'primary.main',
                }}
              >
                <FilterListIcon />
                Filters
              </Typography>
            </Grid>

            {/* Gender Filter */}
            <Grid item xs={12} md={4}>
              <FormControl component="fieldset">
                <Typography variant="subtitle1" gutterBottom>
                  Gender
                </Typography>
                <RadioGroup
                  row
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <FormControlLabel 
                    value="female" 
                    control={
                      <Radio 
                        sx={{
                          color: 'primary.main',
                          '&.Mui-checked': {
                            color: 'primary.main',
                          },
                        }}
                      />
                    } 
                    label="Female" 
                  />
                  <FormControlLabel 
                    value="male" 
                    control={
                      <Radio 
                        sx={{
                          color: 'primary.main',
                          '&.Mui-checked': {
                            color: 'primary.main',
                          },
                        }}
                      />
                    } 
                    label="Male" 
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            {/* Age Range Filter */}
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle1" gutterBottom>
                Age Range: {age[0]} - {age[1]} years
              </Typography>
              <Slider
                value={age}
                onChange={handleAgeChange}
                valueLabelDisplay="auto"
                min={18}
                max={60}
                sx={{
                  color: 'primary.main',
                  '& .MuiSlider-thumb': {
                    '&:hover, &.Mui-focusVisible': {
                      boxShadow: '0 0 0 8px rgba(115, 10, 61, 0.16)',
                    },
                  },
                  '& .MuiSlider-rail': {
                    opacity: 0.32,
                  },
                }}
              />
            </Grid>

            {/* City Filter */}
            <Grid item xs={12} md={4}>
              <Autocomplete
                value={city}
                onChange={(event, newValue) => setCity(newValue)}
                options={cities}
                renderInput={(params) => (
                  <TextField 
                    {...params} 
                    label="City"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'primary.main',
                        },
                      },
                    }}
                  />
                )}
              />
            </Grid>

            {/* Search Button */}
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Button
                variant="contained"
                size="large"
                onClick={handleSearch}
                sx={{
                  bgcolor: 'primary.main',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                  },
                  px: 6,
                  py: 1.5,
                  mt: 2,
                  transition: 'all 0.3s ease',
                }}
                startIcon={<SearchIcon />}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Paper>

        {/* Quick Filter Chips - Optional */}
        <Box sx={{ mt: 4, display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button 
            variant="outlined"
            sx={{ 
              borderColor: 'primary.main',
              color: 'primary.main',
              '&:hover': {
                borderColor: 'primary.dark',
                bgcolor: 'primary.dark',
                color: 'white',
              },
            }}
          >
            Age: 18-25
          </Button>
          <Button 
            variant="outlined"
            sx={{ 
              borderColor: 'primary.main',
              color: 'primary.main',
              '&:hover': {
                borderColor: 'primary.dark',
                bgcolor: 'primary.dark',
                color: 'white',
              },
            }}
          >
            Age: 26-35
          </Button>
          <Button 
            variant="outlined"
            sx={{ 
              borderColor: 'primary.main',
              color: 'primary.main',
              '&:hover': {
                borderColor: 'primary.dark',
                bgcolor: 'primary.dark',
                color: 'white',
              },
            }}
          >
            Popular Cities
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default SearchSection;