import { createContext, CreateContext, useState } from 'react';
// Post Images
import Girl1 from '../assets/post-girl-1.jpg'
import Girl2 from '../assets/post-girl-2.jpg'
import Girl3 from '../assets/girl3.jpg'
import pfp1 from '../assets/pfp-1.jpg'
import pfp2 from '../assets/pfp-2.jpg'
import pfp3 from '../assets/pfp-3.jpg'
import pfp5 from '../assets/pfp-5.jpg'
import pfp6 from "../assets/pfp6.jpg";
import PostBurgers from '../assets/post-burgers.jpg';
import PostApples from "../assets/post-apples.jpg";
import Cat from "../assets/cat.jpg";

export const PostContext = createContext();

export const PostContextProvider = (props) => {
    const [posts, setPosts] = useState([
        {
          id: 1,
          pfp: pfp1,
          name: "Jarrod Broughton",
          time: "2 hours ago",
          text: "hell yea brother",
          img: PostBurgers,
          liked: false
        },
        {
          id: 2,
          pfp: pfp2,
          name: "Sarah-Jane Day",
          time: "34 minutes ago",
          text: "Shooting for Samsung today!",
          img: Girl1,
          liked: false
        },
        {
          id: 3,
          pfp: pfp5,
          name: "Cherie Powers",
          time: "1 hour ago",
          text: "gonna start studying for finals today. 📚",
          img: Girl2,
          liked: false
        },
        {
          id: 4,
          pfp: Girl3,
          name: "Lorri Jo",
          time: "1 hour ago",
          img: pfp5,
          liked: false
        },
        {
          id: 5,
          pfp: pfp3,
          name: "Jónatan Lukas",
          time: "47 minutes ago",
          text: "An apple a day.",
          img: PostApples,
          liked: false
        },
        {
          id: 6,
          pfp: pfp6,
          name: "Samantha James",
          time: "2 hours ago",
          text: "🥺",
          img: Cat,
          liked: false
        },
      ]);

      return (
        <PostContext.Provider value={[posts, setPosts]}>
            {props.children}
        </PostContext.Provider>
      )
}