import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#BE5985',
      light: '#f8f4f4',
      dark: '#EC7FA9',
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
          color: 'primary.main',
        },
      },
    },
  },
});