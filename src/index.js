import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './components/app/App';
import { ApartmentPage, MainPage, NotificationsPage } from './components/pages';
import SignIn from './components/signIn/SignIn';
import ReportsPage from './components/pages/ReportsPage';

const aparts = [
  {
    id: 0,
    owner: "Смирнов Иван Евгеньевич",
    name: "АК 'Волна' № 345 Студио",
    param: "345-Studio",
    adress: "С-Пб., ул. Новая, д.110а, корп 2 , подъезд 1, этаж 12",
    contract: 12234556,
    ownership: 100,
    occupancy: 73,
    stat: [
      {
        month: "march",
        occupancy: 73,
        averege: 1325,
        income: 48250
      },
      {
        month: "february",
        occupancy: 83,
        averege: 1178,
        income: 45732
      },
      {
        month: "junuary",
        occupancy: 62,
        averege: 987,
        income: 36587
      }
    ]
  },
  {
    id: 1,
    owner: "Смирнов Иван Евгеньевич",
    name: "АК 'Волна' № 112 Премиум",
    param: "112-Premium",
    adress: "С-Пб., ул. Новая, д.10, подъезд 11, этаж 3",
    contract: 1765,
    ownership: 50,
    occupancy: 63,
    stat: [
      {
        month: "march",
        occupancy: 85,
        averege: 1458,
        income: 50580
      },
      {
        month: "february",
        occupancy: 69,
        averege: 1067,
        income: 40357
      },
      {
        month: "junuary",
        occupancy: 50,
        averege: 875,
        income: 34356
      }
    ]
  },
]

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="apartments" element={<MainPage aparts={aparts} />} >

        </Route>
        <Route path="apartment" element={<ApartmentPage aparts={aparts} />} >
          <Route path=":apartmentId" element={<ApartmentPage aparts={aparts}/>} />
          {/* <Route path=":reports" element={<ReportsPage aparts={aparts}/>} /> */}
        </Route>
        <Route path="/reports" element={<ReportsPage aparts={aparts}/>} />
        <Route path="notithications" element={<NotificationsPage aparts={aparts} />} />
        <Route path="signin" element={<SignIn />} />
      </Route>

    </Routes>
  </BrowserRouter>,
  rootElement
);

