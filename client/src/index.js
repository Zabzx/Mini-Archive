import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import SignUp from './components/Sign-Up/SignUp.jsx'
import LogIn from './components/Log-In/LogIn';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoutes from './components/PrivateRoute';
// Context
import { PostContextProvider } from './context/PostContext';
import { UserContextProvider } from './context/User';
import { LoggedInContextProvider } from './context/LoggedInContext';
import Profile from './components/Profile/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <UserContextProvider>
  <LoggedInContextProvider>
  <PostContextProvider>
  <Routes>
    <Route element={<PrivateRoutes />}>
    <Route path="/" element={<Dashboard />}/>
    <Route path="/profile" element={<Profile />}/>
    </Route>
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<LogIn />} />
    </Routes>
    </PostContextProvider>
    </LoggedInContextProvider>
    </UserContextProvider>
    </BrowserRouter>
);