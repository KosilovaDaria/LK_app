import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProtectedRoute } from '../protectedRoute/ProtectedRoute';
import { UserProvider } from '../userContext/UserContext';
import { ApartsProvider } from '../apartsContext/ApartsContext';
import { NoticeProvider } from '../noticeContext/NoticeContext';

import RequireAuth from '../auth/RequireAuth';
import AppLayout from '../appLayout/AppLayout';
import OverallLayout from '../overallLayout/OverallLayout';
import Apartments from '../apartments/Apartments';
import SingleApartment from '../singleApartment/SingleApartment';
import Reports from '../reports/Reports';
import SingleReport from '../singleReport/SingleReport';
import Notifications from '../notifications/Notifications';
import SignIn from '../signIn/SignIn';
import PassRecovery from '../passRecovery/PassRecovery';
import NotFound from '../notFound/NotFound';


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
      fontSize: '16px',
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
      sm: 360,
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
          props: { variant: "h1", component: 'h2' },
          style: {
            margin: '30px 0 24px',
          }
        },
      ]
    }

  },


})
theme = responsiveFontSizes(theme, { breakpoints: ['xs', 's', 'sm', 'md'], disableAlign: false, factor: 4, variants: ['h1', 'h2', 'h3', 'subtitle1', 'subtitle2', 'body1', 'caption', 'button'] });

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <UserProvider>
          <ApartsProvider>
            <NoticeProvider>
              <Routes>
                <Route path="/" element={<RequireAuth><AppLayout /></RequireAuth>} >
                  <Route index element={<RequireAuth><Apartments /></RequireAuth>} />
                  <Route path="apartments" element={<RequireAuth><OverallLayout /></RequireAuth>} >
                    <Route index element={<RequireAuth><Apartments /></RequireAuth>} />
                    <Route path=":apartmentId" element={<OverallLayout />} >
                      <Route index element={<SingleApartment />} />
                      <Route path="reports" element={<OverallLayout />} >
                        <Route index element={<Reports />} />
                        <Route path=":reportId" element={<SingleReport />} />
                      </Route>
                    </Route>
                  </Route>
                  <Route path="notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
                </Route>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/passrecovery" element={<PassRecovery />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </NoticeProvider>
          </ApartsProvider>
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
export default App;


