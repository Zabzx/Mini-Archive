import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import SignUp from './components/Sign-Up/SignUp.jsx'
import LogIn from './components/Log-In/LogIn';
import Dashboard from './components/Dashboard/Dashboard';
// Context
import { PostContextProvider } from './context/PostContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <PostContextProvider>
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<LogIn />} />
    </Routes>
    </PostContextProvider>
    </BrowserRouter>
);