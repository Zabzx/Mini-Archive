import { createContext, CreateContext, useState } from 'react';
// Post Images
import Girl1 from '../assets/post-girl-1.jpg'
import Girl2 from '../assets/post-girl-2.jpg'
import pfp1 from '../assets/pfp-1.jpg'
import pfp2 from '../assets/pfp-2.jpg'
import pfp3 from '../assets/pfp-3.jpg'
import PostBurgers from '../assets/post-burgers.jpg';

export const PostContext = createContext();

export const PostContextProvider = (props) => {
    const [posts, setPosts] = useState([
        {
          id: 1,
          pfp: pfp1,
          name: "Jarrod Broughton",
          time: "2 hours ago",
          text: "hell yea brother",
          img: PostBurgers
        },
        {
          id: 2,
          pfp: pfp2,
          name: "Sarah-Jane Day",
          time: "34 minutes ago",
          text: "Shooting for Samsung today!",
          img: Girl1
        },
        {
          id: 3,
          pfp: pfp3,
          name: "Cherie Powers",
          time: "1 hour ago",
          text: "gonna start studying for finals today. 📚",
          img: Girl2
        }
      ]);

      return (
        <PostContext.Provider value={[posts, setPosts]}>
            {props.children}
        </PostContext.Provider>
      )
}