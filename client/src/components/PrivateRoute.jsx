import { Outlet, Navigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { UserContext } from '../context/User';

const PrivateRoutes = () => {

    const [user, setUser] = useContext(UserContext);

    useEffect(() => {
        console.log(user)
    }, [])

    return (
        user.loggedIn ? <Outlet /> : <Navigate to={'/login'} />
    )
}

export default PrivateRoutes