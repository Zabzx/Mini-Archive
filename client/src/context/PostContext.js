import { createContext, CreateContext, useState } from 'react';
// Post Images
import Girl1 from '../assets/post-girl-1.jpg'
import Girl2 from '../assets/post-girl-2.jpg'
import Girl3 from '../assets/girl3.jpg'
import pfp1 from '../assets/pfp-1.jpg'
import pfp2 from '../assets/pfp-2.jpg'
import pfp3 from '../assets/pfp-3.jpg'
import pfp4 from '../assets/pfp-5.jpg'
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
          pfp: pfp4,
          name: "Cherie Powers",
          time: "1 hour ago",
          text: "gonna start studying for finals today. 📚",
          img: Girl2,
          liked: false
        },
        {
          id: 4,
          pfp: pfp3,
          name: "Lorri Jo",
          time: "1 hour ago",
          text: "gonna start studying for finals today. 📚",
          img: Girl3,
          liked: false
        },
        {
          id: 5,
          pfp: pfp3,
          name: "Jónatan Lukas",
          time: "1 hour ago",
          text: "gonna start studying for finals today. 📚",
          img: Girl2,
          liked: false
        },
        {
          id: 6,
          pfp: pfp3,
          name: "Cherie Powers",
          time: "1 hour ago",
          text: "gonna start studying for finals today. 📚",
          img: Girl2,
          liked: false
        },
        {
          id: 7,
          pfp: pfp3,
          name: "Cherie Powers",
          time: "1 hour ago",
          text: "gonna start studying for finals today. 📚",
          img: Girl2,
          liked: false
        },
        {
          id: 8,
          pfp: pfp3,
          name: "Cherie Powers",
          time: "1 hour ago",
          text: "gonna start studying for finals today. 📚",
          img: Girl2,
          liked: false
        },
        {
          id: 9,
          pfp: pfp3,
          name: "Cherie Powers",
          time: "1 hour ago",
          text: "gonna start studying for finals today. 📚",
          img: Girl2,
          liked: false
        },
        {
          id: 10,
          pfp: pfp3,
          name: "Cherie Powers",
          time: "1 hour ago",
          text: "gonna start studying for finals today. 📚",
          img: Girl2,
          liked: false
        },
        {
          id: 11,
          pfp: pfp3,
          name: "Cherie Powers",
          time: "1 hour ago",
          text: "gonna start studying for finals today. 📚",
          img: Girl2,
          liked: false
        },
        {
          id: 12,
          pfp: pfp3,
          name: "Cherie Powers",
          time: "1 hour ago",
          text: "gonna start studying for finals today. 📚",
          img: Girl2,
          liked: false
        }
      ]);

      return (
        <PostContext.Provider value={[posts, setPosts]}>
            {props.children}
        </PostContext.Provider>
      )
}