import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/User'
import { PostContext } from '../../context/PostContext';
import placeholderPFP from '../../assets/placeholder-pfp.png'
import { MdTagFaces } from 'react-icons/md';
import { AiOutlinePicture, AiFillCamera, AiOutlinePaperClip, AiFillHeart, AiOutlineMessage, AiOutlineQuestionCircle } from 'react-icons/ai'
import { FaHashtag, FaRegPaperPlane } from 'react-icons/fa'
import { TiAt } from 'react-icons/ti'
import { BsThreeDots } from 'react-icons/bs';
import { BiRedo } from 'react-icons/bi'
import { LikedPostContext } from '../../context/LikedPostsContext';
import './main-feed.css';

const MainFeed = () => {
    // Context
    const [user, setUser] = useContext(UserContext);
    const [posts, setPosts] = useContext(PostContext);
    const [likedPosts, setLikedPosts] = useContext(LikedPostContext);

    // State
    const [postInput, setPostInput] = useState({
        id: Math.floor(Math.random() * 100000),
        text: "",
        pfp: user.pfp ? user.pfp : placeholderPFP,
        name: user.username,
        time: 'Just now',
        liked: false,
      });

    // Functions
    const postSomething = () => {
        if (postInput.text === "") {
          return
        }
    
        setPosts([postInput, ...posts])
      }
    
      const likePost = (post) => {
        setLikedPosts([post, ...likedPosts])
      }
    
      const unlikePost = (item) => {
        setLikedPosts(likedPosts.filter(post => post.id != item.id))
        item.liked = !item.liked;
      }
    
  return (
    <div className="main-feed">
        <section className="post-form">
          <div className="home-container">
          <div className="img-and-input">
            <img src={user.pfp ? user.pfp : placeholderPFP} alt="" />
            <input type="text" placeholder="Say something..." onChange={(e) => setPostInput({...postInput, text: e.currentTarget.value})} />

            <MdTagFaces className="search-emoji" />
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

            <button className={ postInput.text !== "" ? "post-btn" : "inactive-btn"} onClick={postSomething}>
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

            <img src={post.img} className="post-img" alt="" />

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
                <BiRedo className="post-interact-icon"/>
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