import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Link,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Email,
  Lock
} from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';
import { login } from '../api/authService.js';

// Styled components
const PageContainer = styled(Box)({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
position: 'absolute',
top: '50%',
left: '25%',
transform: 'translate(0, -50%)',
overflowY: 'auto'
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
            display: 'flex', 
  flexDirection: 'column',
            alignItems: 'center',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  borderRadius: '16px',
  // maxWidth: '450px',
  // width: '100%',
  backgroundColor: '#ffffff',
}));

const Logo = styled('img')({
  width: '180px',
  marginBottom: '24px',
});

// const GoogleButton = styled(Button)(({ theme }) => ({
//   marginBottom: theme.spacing(3),
//   padding: theme.spacing(1.5),
//   backgroundColor: '#ffffff',
//   color: '#757575',
//   border: '1px solid #dadce0',
//   boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
//   '&:hover': {
//     backgroundColor: '#f8f9fa',
//     boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//   },
// }));

const SignInButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1.5),
  backgroundColor: theme.palette.primary.main,
  color: '#ffffff',
  fontWeight: 600,
  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
  },
}));

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const handleLogin = async(e) => {
    e.preventDefault();
    
    try {
      const res = await login(email, password);
      const isAdmin = res && res.isAdmin;
  
      if(isAdmin){
        navigate("/menu-master");
      }else{
        navigate("/cost-sheet");
      }
      
    } catch (error) {
        setMessage(error.response?.data?.message || error.message || 'Something went wrong.'); // validation error message
    }
};

  return (
    <PageContainer>
      <Container maxWidth="sm" sx={{ margin: 0 }}>
        <StyledPaper elevation={3}>          
          <Typography component="h1" variant="h4" gutterBottom sx={{ fontWeight: 600, textAlign: 'center', color: 'primary.main' }}>
            Welcome Back!
          </Typography>
          
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
            Please enter your details to access your account
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, textAlign: 'center', color: 'primary.main' }}>
          {message && <p>{message}</p>}
          </Typography>

          <Box component="form" onSubmit={handleLogin} sx={{ width: '100%' }}>
            {/* <GoogleButton
              fullWidth
              variant="outlined"
              startIcon={<Google />}
            >
              Sign in with Google
            </GoogleButton>

            <Divider sx={{ my: 3 }}>or</Divider> */}

            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: <Email color="action" sx={{ mr: 1 }} />,
              }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: <Lock color="action" sx={{ mr: 1 }} />,
              }}
            />

            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              mt: 2 
            }}>
              {/* <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    color="primary"
                  />
                }
                label="Remember me"
              /> */}
              <Link href="/forgot-password" variant="body2" underline="hover" sx={{ color: 'primary.main' }}>
                Forgot Password?
              </Link>
            </Box>

            <SignInButton
              type="submit"
              fullWidth
              variant="contained"
              size="large"
            >
              Sign In
            </SignInButton>

            {/* <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Don't have an account?{' '}
                <Link href="register" variant="body2" underline="hover" sx={{ fontWeight: 600 }}>
                  Sign Up Now
                </Link>
              </Typography>
            </Box> */}
          </Box>
        </StyledPaper>
      </Container>
    </PageContainer>
  );
};

export default SignInPage;