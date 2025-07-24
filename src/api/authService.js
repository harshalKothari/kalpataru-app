import apiserver from './axiosInstance';
const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'JWT fefege...'
}
export const login = async (email, password) => {
  try {
    let input = {
      email: email,
      password: password
    }
    const response = await apiserver.post('/auth/login', input);
    localStorage.setItem('accessToken', response && response.data && response.data.accessToken);
    localStorage.setItem('refreshToken', response && response.data && response.data.refreshToken);
    localStorage.setItem('isAdmin', response && response.data && response.data.isAdmin);
    localStorage.setItem('isUser', response && response.data && response.data.isUser);
    return response.data && response.data;
  } catch (error) {
    console.error('Login error', error.response?.data?.message || error.message);
    throw error;
  }
};

export const logout = async () => {
  try {
    // Clear auth token or user session
     // Adjust if using cookies or another store
    // Redirect to login or home page
    let token = localStorage.getItem('refreshToken');
    await apiserver.post(`/auth/logout`);
    localStorage.removeItem('accessToken');
    window.location.href = '/'; // Or use useNavigate from react-router-dom
  } catch (error) {
    console.error('Logout error', error.response?.data?.message || error.message);
  }
};

export const refreshAccessToken = async () => {
  try {
    const res = await apiserver.post('/auth/refresh-token');
    return res.data; // { accessToken: newToken }
  } catch (error) {
    console.error('Refresh token failed', error.response?.data?.message || error.message);
    throw error;
  }
};

export const requestPasswordReset = async (email) => {
  try {
    const res = await apiserver.post('/auth/request-password-reset', { email });
    return res.data; // e.g. { message: 'Reset link sent' }
  } catch (error) {
    console.error('Request password reset failed', error.response?.data?.message || error.message);
    throw error;
  }
};

export const resetPassword = async (token, newPassword) => {
  try {
    const res = await apiserver.post(`/auth/reset-password`, { password: newPassword });
    return res.message; // e.g. { message: 'Password updated' }
  } catch (error) {
    console.error('Reset password failed', error.response?.data?.message || error.message);
    throw error;
  }
};
