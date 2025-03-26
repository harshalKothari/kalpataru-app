import React from 'react';
import { Box, Container, Typography, Card, CardContent, Avatar, Rating } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const SuccessStories = () => {
  const stories = [
    {
      name: "John Doe",
      role: "Software Engineer",
      story: "This platform helped me land my dream job at a top tech company.",
      rating: 5,
      image: "/avatar1.jpg"
    },
    {
      name: "Jane Smith",
      role: "Product Manager",
      story: "The resources and community support were invaluable in my career transition.",
      rating: 5,
      image: "/avatar2.jpg"
    },
    {
      name: "Mike Johnson",
      role: "Data Scientist",
      story: "I found amazing mentors here who guided me throughout my journey.",
      rating: 5,
      image: "/avatar3.jpg"
    }
  ];

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: 6,
            color: 'primary.main',
            fontWeight: 'bold'
          }}
        >
          Success Stories
                  </Typography>
        <Carousel
          animation="slide"
          interval={4000}
          sx={{ minHeight: '400px' }}
                  >
          {stories.map((story, index) => (
            <Card
              key={index}
              sx={{
                maxWidth: 600,
                margin: 'auto',
                boxShadow: 3,
                borderRadius: 4,
                p: 2
              }}
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <Avatar
                  src={story.image}
                  sx={{
                    width: 120,
                    height: 120,
                    margin: 'auto',
                    mb: 2
                  }}
                />
                <Typography variant="h5" gutterBottom>
                  {story.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  gutterBottom
                >
                  {story.role}
                </Typography>
                <Rating value={story.rating} readOnly sx={{ mb: 2 }} />
                <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                  "{story.story}"
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default SuccessStories;