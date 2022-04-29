import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useService from '../../services/services';

import { UserProvider } from '../userContext/UserContext';
import { useUser } from '../userContext/UserContext';
import { ProtectedRoute } from '../protectedRoute/ProtectedRoute';

import AppHeader from "../appHeader/AppHeader";
import ApartLayout from '../apartLayout/ApartLayout';
import Apartments from '../apartments/Apartments';
import SingleApartment from '../singleApartment/SingleApartment';
import ReportLayout from '../reportLayout/ReportLayout';
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

function App(props) {

  // const [selectedApart, setSelectedApart] = useState(null);
  // //получение id апартамента при клике на карточку
  // const onApartmentSelected = (id) => {
  //   setSelectedApart(id)
  // }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<ProtectedRoute><AppHeader /></ProtectedRoute>}>
              <Route index element={<AppHeader />} />
              <Route path="apartments" element={<ProtectedRoute><ApartLayout /></ProtectedRoute>} >
                <Route index element={<Apartments
                // onApartmentSelect={onApartmentSelected} 
                />} />
                <Route path=":apartmentId" element={<ProtectedRoute>
                  <ReportLayout />
                </ProtectedRoute>} >
                  <Route index element={<SingleApartment
                  // onApartmentSelected={onApartmentSelected} 
                  />} />
                  <Route path="reports" element={<ReportLayout />} >
                    <Route index element={<Reports />} />
                    <Route path=":reportId" element={<SingleReport />} />
                  </Route>
                </Route>
              </Route>
              <Route path="notifications" element={
                <ProtectedRoute>
                  <Notifications />
                </ProtectedRoute>
              } />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/signin" element={
              <UserProvider>
                <SignIn />
              </UserProvider>} />
            <Route path="/passrecovery" element={<PassRecovery />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
export default App;


// репортсы не вложены в синглапартмент 
//              <Route path="/" element={
//               <UserProvider><AppHeader /></UserProvider>} >
//               <Route path="apartments" element={<ApartLayout />} >
//                 <Route index element={<UserProvider><Apartments onApartmentSelect={onApartmentSelected} /></UserProvider>} />
//                 <Route path=":apartmentId" element={<SingleApartment onApartmentSelected={onApartmentSelected} />} >
//                 </Route>
//                 <Route path="reports" element={<ReportLayout />} >
//                   <Route index element={<Reports apartId={selectedApart}
//                   // reportsList={reportsList} changeReportStatusUnread={changeReportStatusUnread} 
//                   />} />
//                   <Route path=":reportId" element={<SingleReport apartId={selectedApart}
//                   //  reportContent={reportContent} report={report} changeReportStatusAccept={changeReportStatusAccept} 
//                   />} />
//                 </Route>
//               </Route>
//               <Route path="notifications" element={
//                 <ProtectedRoute>
//                     <Notifications />
//                 </ProtectedRoute>
//               } />
//               <Route path="*" element={<NotFound />} />
//             </Route> 