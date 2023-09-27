import { createContext, useState } from 'react';
import placeholderPFP from "../assets/placeholder-pfp.png"

export const UserContext = createContext();

export const UserContextProvider = (props) => {
    const [user, setUser] = useState({
        username: null,
        email: null,
        password: null,
        pfp: placeholderPFP,
    })

    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}