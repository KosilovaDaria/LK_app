import React, { useState } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './components/app/App';
import SignIn from './components/signIn/SignIn';
import Apartments from './components/apartments/Apartments';
import ApartLayout from './components/apartLayout/ApartLayout';
import SingleApartment from './components/singleApartment/SingleApartment';
import Reports from './components/reports/Reports';
import SingleReport from './components/singleReport/SingleReport';
import Notifications from './components/notifications/Notifications';
import PassRecovery from './components/passRecovery/PassRecovery';
import NotFound from './components/notFound/NotFound';
import ReportLayout from './components/reportLayout/ReportLayout';
// const aparts = [
//   {
//     id: 0,
//     owner: "Смирнов Иван Евгеньевич",
//     name: "АК 'Волна' № 345 Студио",
//     param: "345-Studio",
//     adress: "С-Пб., ул. Новая, д. 110 а, корп. 2, подъезд 1, этаж 12",
//     contract: 12234556,
//     ownership: 100,
//     occupancy: 73,
//     stat: [
//       {
//         month: "march",
//         occupancy: 73,
//         averege: 1325,
//         income: 48250
//       },
//       {
//         month: "february",
//         occupancy: 83,
//         averege: 1178,
//         income: 45732
//       },
//       {
//         month: "junuary",
//         occupancy: 62,
//         averege: 987,
//         income: 36587
//       }
//     ]
//   },
//   {
//     id: 1,
//     owner: "Смирнов Иван Евгеньевич",
//     name: "АК 'Волна' № 112 Премиум",
//     param: "112-Premium",
//     adress: "С-Пб., ул. Новая, д.10, подъезд 11, этаж 3",
//     contract: 1765,
//     ownership: 50,
//     occupancy: 63,
//     stat: [
//       {
//         month: "vfhn",
//         occupancy: 85,
//         averege: 1458,
//         income: 50580
//       },
//       {
//         month: "february",
//         occupancy: 69,
//         averege: 1067,
//         income: 40357
//       },
//       {
//         month: "junuary",
//         occupancy: 50,
//         averege: 875,
//         income: 34356
//       }
//     ]
//   },
// ]

const rootElement = document.getElementById("root");



render (
  <React.StrictMode>
  <App/>
</React.StrictMode>,
rootElement
)

// render(
//   <BrowserRouter>
//     <Routes>
//       <Route index element={<SignIn />} />
//       <Route path="/" element={<App />} >
//         <Route path="apartments" element={<ApartLayout aparts={aparts} />} >
//           <Route index element={<Apartments aparts={aparts} />} />
//           <Route path=":apartmentId" element={<SingleApartment aparts={aparts} />} >
//             {/* <Route path="reports" element={<ReportLayout aparts={aparts} />} >
//               <Route index element={<Reports aparts={aparts} />} />
//               <Route path="report" element={<SingleReport aparts={aparts} />} />
//             </Route> */}
//           </Route>
//           <Route path="reports" element={<ReportLayout aparts={aparts} />} >
//             <Route index element={<Reports aparts={aparts} />} />
//             <Route path="report" element={<SingleReport aparts={aparts} />} />
//           </Route>
//         </Route>
//         <Route path="notifications" element={<Notifications aparts={aparts} />} />
//         <Route path="*" element={<NotFound />} />
//       </Route>
//       <Route path="/signin" element={<SignIn />} />
//       <Route path="/passrecovery" element={<PassRecovery />} />
//     </Routes>
//   </BrowserRouter>,
//   rootElement
// );

