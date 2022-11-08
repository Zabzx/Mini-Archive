import { createContext, useState } from "react";

export const LoggedInContext = createContext();

export const LoggedInContextProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(true);

    return(
        <LoggedInContext.Provider value={[loggedIn, setLoggedIn]}>
            {props.children}
        </LoggedInContext.Provider>
    )
}