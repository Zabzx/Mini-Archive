import React, { useContext, useState, useRef, useEffect } from 'react'
import { UserContext } from '../../context/User'
import { PostContext } from '../../context/PostContext';
import placeholderPFP from '../../assets/placeholder-pfp.png'
import { MdTagFaces } from 'react-icons/md';
import { AiOutlinePicture, AiFillCamera, AiOutlinePaperClip, AiFillHeart, AiOutlineMessage } from 'react-icons/ai'
import { FaHashtag, FaRegPaperPlane } from 'react-icons/fa'
import { TiAt } from 'react-icons/ti'
import { BsThreeDots } from 'react-icons/bs';
import { BiRedo } from 'react-icons/bi'
import { FiEdit3 } from "react-icons/fi"
import { IoTrashBinOutline } from "react-icons/io5"
import { LikedPostContext } from '../../context/LikedPostsContext';
import './main-feed.css';

const MainFeed = () => {
    // Context
    const [user, setUser] = useContext(UserContext);
    const [posts, setPosts] = useContext(PostContext);
    const [likedPosts, setLikedPosts] = useContext(LikedPostContext);
    const [inputMode, setInputMode] = useState("post");
    const [desiredId, setDesiredId] = useState();

    const inputRef = useRef();

    const getRandomNumber = () => {
      const random = Math.random() * 100000000000000;
      return random;
    }

    // State
    const [postInput, setPostInput] = useState({
        id: undefined,
        text: "",
        pfp: user.pfp ? user.pfp : placeholderPFP,
        name: user.username,
        time: 'Just now',
        liked: false,
        fromUser: true,
      });

    // Functions
    const postSomething = () => {
      if (inputMode === "post") {
        if (postInput.text === "") {
          return;
        }
    
        postInput.id = getRandomNumber();
        postInput.time = getTime();
        postInput.pfp = user.pfp;
        postInput.fromUser = true;
        setPosts([postInput, ...posts]);
        setPostInput({ ...postInput, text: "" });
      } else if (inputMode === "edit") {
        const updatedPosts = posts.map((post) => {
          if (post.id === desiredId) {
            // Add updated post to liked posts if the orinal post was liked
            if (post.liked) {
              setLikedPosts((prev) => {
                for (let i = 0; i < prev.length; i++) {
                  let u = prev[i]
                  u.text = postInput.text;
                  return [...prev];
                }
              })
            }
            return { ...post, text: postInput.text };
          }
          setInputMode("post");
          return post; // Return unchanged posts
        });
        inputRef.current.value = ""
        setPosts(updatedPosts);
      }
    };

    useEffect(() => {
      inputRef.current.value = "";
    }, [posts]);
      
    
      const likePost = (post) => {
        setLikedPosts([post, ...likedPosts])
      }
    
      const unlikePost = (item) => {
        setLikedPosts(likedPosts.filter(post => post.id != item.id))
        item.liked = !item.liked;
      }

      const editPost = (post) => {
        setInputMode("edit");
        setPostInput({
          text: post.text
        });
        setDesiredId(post.id);
        inputRef.current.focus();
      }

      const deletePost = (id) => {
        const filteredPosts = posts.filter(p => p.id !== id);
        setPosts(filteredPosts);
      }

      const getTime = () => {
        const currentTimeInMillis = Date.now();
        const currentDate = new Date(currentTimeInMillis);

        // Get hours, minutes, and AM/PM
        const hours = currentDate.getHours() % 12 || 12; // Convert 0 to 12
        const minutes = currentDate.getMinutes();
        const ampm = currentDate.getHours() >= 12 ? 'PM' : 'AM';

        // Create the formatted time string
        const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;

        return formattedTime
      }

      const clearRef = () => {
        inputRef.current.value = "";
      }
    
  return (
    <div className="main-feed">
        <section className="post-form">
          <div className="home-container">
          <div className="img-and-input">
            <img src={user.pfp ? user.pfp : placeholderPFP} alt="" />
            <input ref={inputRef} value={postInput.text} type="text" placeholder="Say something..." onChange={(e) => setPostInput({...postInput, text: e.currentTarget.value})} />

            <MdTagFaces onClick={() => clearRef()} className="search-emoji" />
          </div>
          </div>

          <div className="post-options home-container">
          <ul>

          <AiOutlinePicture className="post-option-icon" style={{color: 'var(--primary-blue)'}} />
            <li>
              Image
            </li>

            <AiFillCamera style={{color: '#88E26E'}} className="post-option-icon" />
            <li>
              Video
            </li>

            <AiOutlinePaperClip style={{color: '#ECBD59'}} className="post-option-icon" />
            <li>
              Attatchment
            </li>

            <FaHashtag style={{color: '#EC5959'}} className="post-option-icon" />
            <li>
              Hashtag
            </li>

            <TiAt className="post-option-icon" />
            <li>
              Mention
            </li>

            <button className={ postInput.text !== "" ? "post-btn" : "inactive-btn"} onClick={() => postSomething()}>
              Post
            </button>
          </ul>
        </div>
        </section>

        <section className="posts">
          {posts.map(post => (
            <div className="post" key={post.id}>
            <div className="home-container">
            <div className="post-header">
              <div className="post-name-and-img">
                <img src={post.pfp} className="post-pfp" alt="" />
                <div>
                <h3>{post.name}</h3>
                <small>{post.time}</small>
                </div>
              </div>

              <BsThreeDots />
            </div>
            <p className="post-text">{post.text}</p>

            { post.img !== undefined ? <img src={post.img} className="post-img" alt="" /> : ""}

            <div className="post-interact">
              <div className="like-and-comment">
                <AiFillHeart onClick={() => {
                  if (!post.liked) {
                    likePost(post)
                    post.liked = !post.liked;
                  } else {
                    unlikePost(post);
                  }
                }} className={ post.liked ? "post-interact-icon liked" : "post-interact-icon unliked"} />
                <AiOutlineMessage className="post-interact-icon" />
                { post.fromUser ? <FiEdit3 className="post-interact-icon" onClick={() => editPost(post)} /> : <BiRedo className="post-interact-icon"/> }
                { post.fromUser ? <IoTrashBinOutline className="post-interact-icon" onClick={() => deletePost(post.id)} /> : ""}
              </div>

              <div className="post-share">
                <FaRegPaperPlane className="post-interact-icon" />
              </div>
            </div>
            </div>
          </div>
          ))}
        </section>
      </div>
  )
}

export default MainFeed