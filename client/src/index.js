import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import SignUp from './components/Sign-Up/SignUp.jsx'
import LogIn from './components/Log-In/LogIn';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoutes from './components/PrivateRoute';
import Profile from './components/Profile/Profile';
// Context
import { PostContextProvider } from './context/PostContext';
import { UserContextProvider } from './context/User';
import { LoggedInContextProvider } from './context/LoggedInContext';
import { LikedPostContextProvider } from './context/LikedPostsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <UserContextProvider>
  <LoggedInContextProvider>
  <PostContextProvider>
  <LikedPostContextProvider>
  <Routes>
    <Route element={<PrivateRoutes />}>
    <Route path="/" element={<Dashboard />}/>
    <Route path="/profile" element={<Profile />}/>
    </Route>
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<LogIn />} />
    </Routes>
    </LikedPostContextProvider>
    </PostContextProvider>
    </LoggedInContextProvider>
    </UserContextProvider>
    </BrowserRouter>
);