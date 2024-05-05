import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import './App.scss'
function App() {
  const HomeComponent = lazy(() => import("./Component/Home"));
  const LoginComponent = lazy(() => import("./Component/Login"));
  const SignupComponent = lazy(() => import("./Component/Signup/index"));
  const AboutComponent = lazy(() => import("./Component/About/index"));
  const ServiceComponent = lazy(() => import("./Component/ServiceProviding/index"));
  const CreateEventComponent = lazy(() => import("./Component/CreateEvent/index"));
  const GetDemoComponent = lazy(() => import("./Component/getDemo"));
  const BirthDayComp = lazy(() => import("./Component/BirthDay/BirthDayComp"));
  const UpcomingEvent = lazy(() => import("./Component/UpcomingEvent/index"));
  const PrivateRoute = lazy(() => import("./Component/Privateroute/index"));


  const isAuthenticated = localStorage.getItem('token') !== null;
  console.log("isAuthenticated", isAuthenticated)


  return (
    <BrowserRouter>
      <Suspense fallback={
        <div className="loader-overlay flight_loader">
          <div className='boot-strap-loader'>
            <div className="spinner-border text-primary" role="status"></div>
          </div>
          <p className="sr-only">Loading...</p>
        </div>}
      >
        <Routes>
          <Route path="*" exact element={<Navigate from='*' to='/' />} />
          <Route path="/" exact element={<HomeComponent />} />
          <Route path="/home" exact element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <HomeComponent isLoggedIn={true} />
            </PrivateRoute>} />
          <Route path="/login" exact element={<LoginComponent />} />
          <Route path="/signup" exact element={<SignupComponent />} />
          <Route path="/About" exact element={<AboutComponent />} />
          <Route path="/Service" exact element={<ServiceComponent />} />

          <Route path="/createevent" exact element={<PrivateRoute isAuthenticated={isAuthenticated}>
            <CreateEventComponent  />
          </PrivateRoute>} />
          <Route path="/getDemo" exact element={<GetDemoComponent />} />
          <Route path="/events" exact element={<UpcomingEvent />} />
          
          <Route path="/viewevents/:id" exact element={<PrivateRoute isAuthenticated={isAuthenticated}>
            <BirthDayComp />
          </PrivateRoute>} />


        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
