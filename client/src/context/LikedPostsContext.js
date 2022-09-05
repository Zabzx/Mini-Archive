import { createContext, useState } from 'react';

export const LikedPostContext = createContext();

export const LikedPostContextProvider = (props) => {
    const [likedPosts, setLikedPosts] = useState([]);
    
    return (
        <LikedPostContext.Provider value={[likedPosts, setLikedPosts]}>
            {props.children}
        </LikedPostContext.Provider>
    )
}