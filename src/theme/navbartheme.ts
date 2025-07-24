import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
      light: '#3b0918',
      dark: '#C0A9BD',
    },
    secondary: {
      main: '#ffffff',
      dark: '#F5F5F5',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: 'primary.main',
        },
      },
    },
  },
});