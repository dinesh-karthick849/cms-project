 // src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import HomePages from './Pages/HomePages';
import SignInPages from './Pages/SignInPages';
import DashboardLayout from './Pages/Dashboard/DashboardLayout';
import DashboardHome from './Pages/Dashboard/DashboardHome';
import About from './Pages/Dashboard/About';
import Services from './Pages/Dashboard/Services';
import Team from './Pages/Dashboard/Team';
import Profile from './Pages/Dashboard/Profile';

import PrivateRoute from './components/PrivateRoute';
import AboutUsPages from './Pages/AboutUsPages'; // Public about page

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public */}
        <Route path="/" element={<HomePages />} />
        <Route path="/signin" element={<SignInPages />} />
        <Route path="/about-us" element={<AboutUsPages />} />

        {/* Protected Dashboard */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="team" element={<Team />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;

