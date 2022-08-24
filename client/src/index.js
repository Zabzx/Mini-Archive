import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import SignUp from './components/Sign-Up/SignUp.jsx'
import LogIn from './components/Log-In/LogIn';
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<LogIn />} />
    </Routes>
    </BrowserRouter>
    </AuthProvider>
);