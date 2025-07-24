import { ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import SignInPage from './components/SignInPage';
import CreateProfilePage from './components/CreateProfilePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import UserDashboard from './components/UserDashboard';
import { theme } from './theme/theme';

function App() {
  return (
      <ThemeProvider theme={theme}>
        <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/kalpataru-app/user-dashboard" element={<UserDashboard />} />
            <Route path="/kalpataru-app" element={<LandingPage />} />
            <Route path="/kalpataru-app/signin" element={<SignInPage />} />
            <Route path="/kalpataru-app/signup" element={<CreateProfilePage />} />
            <Route path="/kalpataru-app/about" element={<AboutPage />} />
            <Route path="/kalpataru-app/contact" element={<ContactPage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;