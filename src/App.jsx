import { ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import SignInPage from './components/SignInPage';
import RegisterPage from './components/RegisterPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import { theme } from './theme/theme';

function App() {
  return (
      <ThemeProvider theme={theme}>
        <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/kalpataru-app" element={<LandingPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<RegisterPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;