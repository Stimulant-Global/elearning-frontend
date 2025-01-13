import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import CoursesPage from './pages/CoursesPage';
// import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
// import ProfilePage from './pages/ProfilePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/courses" element={<CoursesPage />} /> */}
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;