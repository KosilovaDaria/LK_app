import { Container, CssBaseline } from '@mui/material';
// import { createTheme, ThemeProvider, styled } from '@mui/material/styles'; 
import AppHeader from "../appHeader/AppHeader";
import { MainPage, ApartmentPage } from '../pages';

function App() {
  return (
    <>
      <CssBaseline />
      <AppHeader />
      <main>
        <Container maxWidth='lg'>
          {/* <MainPage/> */}
          <ApartmentPage />
        </Container>
      </main>
    </>
  );
}

export default App;
