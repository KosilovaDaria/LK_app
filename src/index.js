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

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="apartments" element={<MainPage />} />
        <Route path="apartment" element={<ApartmentPage />} />
        <Route path="notithications" element={<NotificationsPage />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

