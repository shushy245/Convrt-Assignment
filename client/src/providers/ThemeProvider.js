import { createTheme, responsiveFontSizes } from '@mui/material';

const theme = responsiveFontSizes(createTheme({
  palette: {
    'loginBackground': 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(68,0,181,1) 0%, rgba(255,255,255,1) 100%)',
    'paper': '#FFFFFF',
    'homeBackground': '#dae5ee',
  },
  typography: {
    fontFamily: 'Avenir'
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#344A53',
          color: '#e9f5ff'
        }
      }
    }
  }
}))

export default theme;