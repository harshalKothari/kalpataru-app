import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  IconButton,
  Chip,
  Avatar,
  Button,
  tableCellClasses,
  styled,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';

// Styled components for table
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#730a3d',
    color: theme.palette.common.white,
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:hover': {
    backgroundColor: 'rgba(115, 10, 61, 0.08)',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const ResultsSection = ({ searchCriteria }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const navigate = useNavigate();

  // Sample data - replace with actual data from your backend
  const results = [
    {
      id: 1,
      name: 'John Doe',
      age: 28,
      gender: 'Male',
      city: 'Mumbai',
      occupation: 'Software Engineer',
      photo: '/path/to/photo1.jpg',
      isOnline: true,
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 25,
      gender: 'Female',
      city: 'Delhi',
      occupation: 'Doctor',
      photo: '/path/to/photo2.jpg',
      isOnline: false,
    },
    // Add more sample data as needed
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleViewProfile = (id) => {
    navigate(`/profile/${id}`);
  };

  const handleSendMessage = (id) => {
    navigate(`/messages/${id}`);
  };

  const handleAddToFavorites = (id) => {
    console.log('Added to favorites:', id);
  };

  return (
    <Box sx={{ py: 4, bgcolor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        {/* Results Header */}
        <Typography
          variant="h4"
          sx={{
            color: '#730a3d',
            fontWeight: 'bold',
            mb: 3,
          }}
        >
          Search Results
        </Typography>

        {/* Active Filters Display */}
        <Box sx={{ mb: 3, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {searchCriteria?.gender && (
            <Chip
              label={`Gender: ${searchCriteria.gender}`}
              onDelete={() => {}}
              sx={{
                bgcolor: '#730a3d',
                color: 'white',
                '& .MuiChip-deleteIcon': {
                  color: 'white',
                },
              }}
            />
          )}
          {searchCriteria?.age && (
            <Chip
              label={`Age: ${searchCriteria.age[0]}-${searchCriteria.age[1]}`}
              onDelete={() => {}}
              sx={{
                bgcolor: '#730a3d',
                color: 'white',
                '& .MuiChip-deleteIcon': {
                  color: 'white',
                },
              }}
            />
          )}
          {searchCriteria?.city && (
            <Chip
              label={`City: ${searchCriteria.city}`}
              onDelete={() => {}}
              sx={{
                bgcolor: '#730a3d',
                color: 'white',
                '& .MuiChip-deleteIcon': {
                  color: 'white',
                },
              }}
            />
          )}
        </Box>

        {/* Results Table */}
        <TableContainer component={Paper} elevation={3}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Profile</StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="center">Age</StyledTableCell>
                <StyledTableCell align="center">Gender</StyledTableCell>
                <StyledTableCell align="center">City</StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
                <StyledTableCell align="center">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell>
                      <Avatar
                        src={row.photo}
                        sx={{ width: 50, height: 50 }}
                      />
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                      <Typography variant="body2" color="textSecondary">
                        {row.occupation}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.age}</StyledTableCell>
                    <StyledTableCell align="center">{row.gender}</StyledTableCell>
                    <StyledTableCell align="center">{row.city}</StyledTableCell>
                    <StyledTableCell align="center">
                      <Chip
                        label={row.isOnline ? 'Online' : 'Offline'}
                        sx={{
                          bgcolor: row.isOnline ? '#4CAF50' : '#grey',
                          color: 'white',
                        }}
                        size="small"
                      />
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                        <IconButton
                          onClick={() => handleViewProfile(row.id)}
                          sx={{ 
                            color: '#730a3d',
                            '&:hover': { bgcolor: 'rgba(115, 10, 61, 0.08)' }
                          }}
                        >
                          <VisibilityIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => handleSendMessage(row.id)}
                          sx={{ 
                            color: '#730a3d',
                            '&:hover': { bgcolor: 'rgba(115, 10, 61, 0.08)' }
                          }}
                        >
                          <MessageIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => handleAddToFavorites(row.id)}
                          sx={{ 
                            color: '#730a3d',
                            '&:hover': { bgcolor: 'rgba(115, 10, 61, 0.08)' }
                          }}
                        >
                          <FavoriteIcon />
                        </IconButton>
                      </Box>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={results.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{
              '.MuiTablePagination-select': {
                color: '#730a3d',
              },
            }}
          />
        </TableContainer>
      </Container>
    </Box>
  );
};

export default ResultsSection;