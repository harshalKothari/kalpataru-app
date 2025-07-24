import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#EE4B2B',
      light: '#f8f4f4',
      dark: '#C0A9BD',
    },
    secondary: {
      main: '#4E212F',
      dark: '#f5f5f5',
      light: '#FFFFFF'
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