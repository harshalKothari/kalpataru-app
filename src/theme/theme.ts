import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#730a3d',
      light: '#9b0f52',
      dark: '#330033',
    },
    secondary: {
      main: '#ffffff',
      dark: '#f5f5f5',
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
          color: '#730a3d',
        },
      },
    },
  },
});