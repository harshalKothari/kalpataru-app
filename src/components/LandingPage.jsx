import React, { useState } from 'react';
import { Box } from '@mui/material';
import HeroSection from './HeroSection';
import SuccessStories from './SuccessStories';
import SearchSection from './SearchSection';
import ResultsSection from './ResultsSection';
import Navbar from './Navbar';
import Footer  from './Footer';

const LandingPage = () => {
  const [searchCriteria, setSearchCriteria] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleSearchComplete = (criteria) => {
    setSearchCriteria(criteria);
    setShowResults(true);
  };

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Navbar />
      <Box sx={{ 
        width: '100%',
        position: 'absolute',
      }}>
        <HeroSection />
        {/* <SuccessStories /> */}
        {/* <SearchSection onSearch={handleSearchComplete} />
        <ResultsSection onSearch={handleSearchComplete} /> */}
        <Footer />
        {showResults && <ResultsSection searchCriteria={searchCriteria} />}
      </Box>
    </Box>
  );
};

export default LandingPage;