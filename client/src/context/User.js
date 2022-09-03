import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        pfp: null,
        loggedIn: false,
    })

    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}