import { Outlet, Navigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { LoggedInContext } from '../context/LoggedInContext';

const PrivateRoutes = () => {

    const [loggedIn, setLoggedIn] = useContext(LoggedInContext);

    return (
        loggedIn ? <Outlet /> : <Navigate to={'/login'} />
    )
}

export default PrivateRoutes