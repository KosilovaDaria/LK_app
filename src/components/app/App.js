import { Container, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
// import { createTheme, ThemeProvider, styled } from '@mui/material/styles'; 
import AppHeader from "../appHeader/AppHeader";


function App() {
  return (
    <>
      <CssBaseline />
      <AppHeader />
      <main>
        <Container maxWidth='lg'>
          <Outlet />
        </Container>
      </main>
    </>
  );
}

export default App;
