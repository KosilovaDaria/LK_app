import {CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import AppHeader from "../appHeader/AppHeader";
import SignIn from '../signIn/SignIn';
import Apartments from '../apartments/Apartments';
import ApartLayout from '../apartLayout/ApartLayout';
import SingleApartment from '../singleApartment/SingleApartment';
import Reports from '../reports/Reports';
import SingleReport from '../singleReport/SingleReport';
import Notifications from '../notifications/Notifications';
import PassRecovery from '../passRecovery/PassRecovery';
import NotFound from '../notFound/NotFound';
import ReportLayout from '../reportLayout/ReportLayout';
import { useEffect, useState } from 'react';

import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import useService from '../../services/services';


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

function App() {

  const [selectedApart, setSelectedApart] = useState(null);
  //получение id апартамента при клике на карточку
  const onApartmentSelected = (id) => {
    setSelectedApart(id)
  }

  //Для отрисовки списка уведомлений и количества уведомлений в хэдере (для демонстрации)
  const { getNotifications } = useService();
  const [notifList, setNotifList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newNotifCount, setNewNotifCount] = useState(0);

  //(для демонстрации)
  useEffect(() => {
    onRequest();
  }, [])

  //запуск функции по получению кол-ва новых уведомлений при измении массива списка уведомлений (для демонстрации)
  useEffect(() => {
    getNewNotifCount(notifList);
  }, [notifList])

  //(для демонстрации)
  const onRequest = () => {
    getNotifications()
      .then(onNotificationsLoaded)
      .catch(() => console.log('Erorr'))
  }

  //Записть состояния списка уведомлений (для демонстрации)
  const onNotificationsLoaded = (notifications) => {
    setNotifList(notifications);
    setLoading(false);
  }

  //получение кол-ва новых уведомлений (для демонстрации)
  const getNewNotifCount = (arr) => {
    const notifCount = arr.filter(item => item.new === true);
    setNewNotifCount(notifCount.length)
  }

  //перезапись кол-ва новых уведомлений (для демонстрации)
  const changeNotifCount = (newList) => {
    getNewNotifCount(newList)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route index element={<SignIn />} />
          <Route path="/" element={<AppHeader newNotifCount={newNotifCount} />} >
            <Route path="apartments" element={<ApartLayout />} >
              <Route index element={<Apartments onApartmentSelected={onApartmentSelected} />} />
              <Route path=":apartmentId" element={<SingleApartment apartId={selectedApart} />} >

              </Route>
              <Route path="reports" element={<ReportLayout />} >
                <Route index element={<Reports />} />
                <Route path="report" element={<SingleReport />} />
              </Route>
            </Route>
            <Route path="notifications" element={<Notifications changeNotifCount={changeNotifCount} notifList={notifList} loading={loading} newNotifCount={newNotifCount} />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/passrecovery" element={<PassRecovery />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )

  // return (
  //   <>
  //     <ThemeProvider theme={theme}>
  //       <CssBaseline />
  //       <AppHeader />
  //       <main>
  //         <Container maxWidth='xl' >
  //           <Outlet />
  //         </Container>
  //       </main>
  //     </ThemeProvider>
  //   </>
  // );
}

export default App;
