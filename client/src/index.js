import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import SignUp from './components/Sign-Up/SignUp.jsx'
import LogIn from './components/Log-In/LogIn';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <AuthProvider>
  <Routes>
    <Route path="/" element={
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    } />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<LogIn />} />
    </Routes>
    </AuthProvider>
    </BrowserRouter>
);