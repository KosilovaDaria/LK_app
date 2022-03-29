import { Container, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'; 
import AppHeader from "../appHeader/AppHeader";
import { Box, typography } from '@mui/system';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#096DD9',
      contrastText: '#fff',
    },
    secondary: {
      main: '#6F757D'
    },
    header: '#fff',
    background: '#FBFCFD',

    emerald: {
      main: '#69A1AC',
    },
    purple: {
      main: '#676EBC',
    },
    orange: {
      main: '#E58B1E',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '24px',
      fontWeight: 500,
    },
    h2: {
      fontSize: '20px',
      fontWeight: 400,
    },
    h3: {
      fontSize: '36px',
      fontWeight: 500,
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: '92px',
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: '72px',
    },
    body1: {
      fontWeight: 400,
      fontSize: '16px',
    },
    // body2: {
    //   fontWeight: 400,
    //   fontSize: '16px',
    // },
    caption: {
      fontWeight: 400,
      fontSize: '14px',
    }
  

  },
  components: {
    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       textTransform: 'none',
    //     },
    //   },
    // },
    
  }
  
})

function App() {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <Box sx={{ bgcolor:'background.main' }}>
        <AppHeader />
        <main>
        
          <Container maxWidth='lg' >
         
            <Outlet />
           
          </Container>
        
        </main>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
