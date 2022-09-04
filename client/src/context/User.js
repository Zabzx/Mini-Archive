import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
    const [user, setUser] = useState({
        username: null,
        email: null,
        password: null,
        pfp: null,
    })

    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}