import React, { useState, useEffect } from 'react';
import {
  TextField,
  MenuItem,
  Pagination,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tabs,
  Tab,
} from '@mui/material';
import { Grid2 } from '@mui/material';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme/theme';

const PageContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
}));

const StyledPaper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
}));

const sampleProfiles = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  age: 25 + (i % 5),
  height: 150 + (i % 10),
  education: ['B.Tech', 'MBA', 'MCA'][i % 3],
  gender: i % 2 === 0 ? 'Male' : 'Female',
  location: ['Mumbai', 'Delhi', 'Pune'][i % 3],
}));

const UserDashboard = () => {
  const [filters, setFilters] = useState({ age: '', height: '', education: '', gender: '', location: '' });
  const [filteredProfiles, setFilteredProfiles] = useState(sampleProfiles);
  const [page, setPage] = useState(1);
  const [shortlisted, setShortlisted] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [tab, setTab] = useState(0);
  const itemsPerPage = 8;

  useEffect(() => {
    let results = sampleProfiles.filter(profile => {
      return (
        (!filters.age || profile.age === parseInt(filters.age)) &&
        (!filters.height || profile.height === parseInt(filters.height)) &&
        (!filters.education || profile.education === filters.education) &&
        (!filters.gender || profile.gender === filters.gender) &&
        (!filters.location || profile.location === filters.location)
      );
    });
    setFilteredProfiles(results);
    setPage(1);
  }, [filters]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleShortlist = (profile) => {
    if (!shortlisted.find(p => p.id === profile.id)) {
      setShortlisted([...shortlisted, profile]);
    }
  };

  const handleRemoveShortlist = (profileId) => {
    setShortlisted(prev => prev.filter(p => p.id !== profileId));
  };

  const handleOpenProfile = (profile) => {
    setSelectedProfile(profile);
  };

  const handleCloseProfile = () => {
    setSelectedProfile(null);
  };

  const paginatedProfiles = (tab === 0 ? filteredProfiles : shortlisted).slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <StyledPaper>
          {/* <Typography variant="h5" gutterBottom>Matchmaking UserDashboard</Typography> */}

          <Tabs value={tab} onChange={(e, newVal) => { setTab(newVal); setPage(1); }} textColor="primary" indicatorColor="primary">
            <Tab label="All Profiles" />
            <Tab label={`Shortlisted (${shortlisted.length})`} />
          </Tabs>

          {tab === 0 && (
            <Grid2 container spacing={2} mt={1}>
              {['age', 'height', 'education', 'gender', 'location'].map((field) => (
                <Grid2 key={field} size={2}>
                  <TextField
                    fullWidth
                    name={field}
                    label={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={filters[field]}
                    onChange={handleFilterChange}
                    select={field !== 'education' && field !== 'location' ? true : false}
                  >
                    {field === 'education' && ['B.Tech', 'MBA', 'MCA'].map(option => (
                      <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                    {field === 'gender' && ['Male', 'Female'].map(option => (
                      <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                    {field === 'location' && ['Mumbai', 'Delhi', 'Pune'].map(option => (
                      <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                    {field === 'age' && Array.from({ length: 30 }, (_, i) => i + 18).map(option => (
                      <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                    {field === 'height' && Array.from({ length: 40 }, (_, i) => i + 140).map(option => (
                      <MenuItem key={option} value={option}>{option} cm</MenuItem>
                    ))}
                  </TextField>
                </Grid2>
              ))}
            </Grid2>
          )}
        </StyledPaper>

        <Box my={4}>
          <Grid2 container spacing={2}>
            {paginatedProfiles.map(profile => (
              <Grid2 size={3} key={profile.id}>
                <Card>
                  <CardContent>
                    <Grid2 container spacing={2} alignItems="center">
                      <Grid2>
                        <Avatar sx={{ bgcolor: theme.palette.primary.main }}>{profile.name[0]}</Avatar>
                      </Grid2>
                      <Grid2 xs>
                        <Typography variant="h6">{profile.name}</Typography>
                        <Typography variant="body2" color="text.secondary">Age: {profile.age}</Typography>
                        <Typography variant="body2" color="text.secondary">Height: {profile.height} cm</Typography>
                        <Typography variant="body2" color="text.secondary">Education: {profile.education}</Typography>
                        <Typography variant="body2" color="text.secondary">Gender: {profile.gender}</Typography>
                        <Typography variant="body2" color="text.secondary">Location: {profile.location}</Typography>
                        <Box mt={1} display="flex" gap={1}>
                          {tab === 0 ? (
                            <Button variant="contained" color="primary" onClick={() => handleShortlist(profile)}>Shortlist</Button>
                          ) : (
                            <Button variant="contained" color="primary" onClick={() => handleRemoveShortlist(profile.id)}>Remove from Shortlist</Button>
                          )}
                          <Button variant="outlined" onClick={() => handleOpenProfile(profile)}>View Details</Button>
                        </Box>
                      </Grid2>
                    </Grid2>
                  </CardContent>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </Box>

        <Box display="flex" justifyContent="center">
          <Pagination
            count={Math.ceil((tab === 0 ? filteredProfiles.length : shortlisted.length) / itemsPerPage)}
            page={page}
            onChange={(_, value) => setPage(value)}
            color="primary"
          />
        </Box>

        <Dialog open={!!selectedProfile} onClose={handleCloseProfile} fullWidth maxWidth="sm">
          <DialogTitle>Profile Details</DialogTitle>
          <DialogContent>
            {selectedProfile && (
              <Box>
                <Typography variant="h6">{selectedProfile.name}</Typography>
                <Typography variant="body1">Age: {selectedProfile.age}</Typography>
                <Typography variant="body1">Height: {selectedProfile.height} cm</Typography>
                <Typography variant="body1">Education: {selectedProfile.education}</Typography>
                <Typography variant="body1">Gender: {selectedProfile.gender}</Typography>
                <Typography variant="body1">Location: {selectedProfile.location}</Typography>
              </Box>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseProfile}>Close</Button>
          </DialogActions>
        </Dialog>
      </PageContainer>
    </ThemeProvider>
  );
};

export default UserDashboard;
