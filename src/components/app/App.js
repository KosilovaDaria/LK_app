import { Container, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles'; 
import AppHeader from "../appHeader/AppHeader";
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


let theme = createTheme({
  palette: {
    primary: {
      main: '#096DD9',
      contrastText: '#fff',
    },
    secondary: {
      main: '#6F757D'
    },
    header: '#fff',
    background: 'red',
    // background: '#FBFCFD',

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

    caption: {
      fontWeight: 400,
      fontSize: '14px',
    },
    button: {
      fontWeight: 500,
      fontSize: '14px',
    }
  
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 359,
       s: 520,
      md: 700,
       l: 850,
      lg: 1000,
      xl: 1200,
    },
  },
  
  components: {
    MuiTypography: {
      variants: [
        {
          props:{ variant:"h1",  component:'h2'},
          style: {
            margin: '30px 0 24px',
          }
        }
      ]
    }
    
  },

  
})
theme = responsiveFontSizes(theme,{breakpoints:['xs', 'sm', 'md'],disableAlign: false, factor: 3, variants: ['h1', 'h2', 'h3', 'subtitle1', 'subtitle2', 'caption', 'button'] });
function App() {
// const [selectedApart, setSelectedApart] = useState(null);
// const onApartLoad = (id) => {
//   setSelectedApart(id)
// }
// console.log(selectedApart)

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppHeader />
        <main>
          <Container maxWidth='xl' >
            <Outlet />
          </Container>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
