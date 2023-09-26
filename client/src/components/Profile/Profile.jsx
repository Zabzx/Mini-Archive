import React, { useContext, useState, useEffect } from 'react'
import './profile.css'
import TempPFP from '../../assets/temp-pfp.jpg'
import Nav from '../Nav/Nav'
import {UserContext} from '../../context/User'
import { LikedPostContext } from '../../context/LikedPostsContext'
import { Link } from 'react-router-dom'
import placeholderPFP from '../../assets/placeholder-pfp.png'
// Framer motion
import { motion, AnimatePresence } from 'framer-motion'
// Icons
import { ImCross } from 'react-icons/im'
import { BsThreeDots } from 'react-icons/bs'
import { AiFillHeart, AiOutlineMessage } from 'react-icons/ai'
import { BiRedo } from 'react-icons/bi'
import { FaRegPaperPlane } from 'react-icons/fa'

const Profile = () => {
    const [user, setUser] = useContext(UserContext);
    const [likedPosts, setLikedPosts] = useContext(LikedPostContext);
    const [userImage, setUserImage] = useState('');
    const [loadedUserImage, setLoadedUserImage] = useState('');
    const [confirmImg, setConfirmImg] = useState(false);
    const [pfpAlert, setPfpAlert] = useState(false);
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [editAlert, setEditAlert] = useState(false);
    const [newUserInfo, setNewUserInfo] = useState({
        username: '',
        email: ''
    });

    useEffect(() => {
        if (userImage) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setLoadedUserImage(reader.result)
            }
            reader.readAsDataURL(userImage)
        } else {
            setLoadedUserImage(null)
        }
    }, [userImage])

    // Alerts
    useEffect(() => {
        setTimeout(() => {
            setPfpAlert(false);
        }, 2000);
    }, [pfpAlert]);

    useEffect(() => {
        setTimeout(() => {
            setEditAlert(false);
        }, 2000);
    }, [editAlert]);

    const setPfp = () => {
        setUser({...user, pfp: loadedUserImage})
        setPfpAlert(true);
    }

    const openEditPopup = () => {
        setShowEditPopup(true);
    }

    const closeEditPopup = () => {
        setShowEditPopup(false);
    }

    const editUserInfo = (e) => {
        e.preventDefault();
        setUser({...user, username: newUserInfo.username, email: newUserInfo.email});
        setEditAlert(true);
    }

    const likePost = (post) => {
        setLikedPosts([post, ...likedPosts])
        console.log(likedPosts);
      }
    
      const unlikePost = (item) => {
        setLikedPosts(likedPosts.filter(post => post.id != item.id))
        item.liked = !item.liked;
      }

  return (
    <>
    <Nav />

    <div className="profile-container">
      <div className="profile-edit">
      <img className="edit-pfp" src={ loadedUserImage ? loadedUserImage : placeholderPFP} alt="" />
      <br />
      <input className='pfp-input' type="file" onChange={(e) => {
        const file = e.target.files[0];
        setUserImage(file);
        setConfirmImg(true)
        }}/>
        <br />
        { confirmImg ? <button className="pfp-confirm" onClick={setPfp}>Confirm profile picture</button> : "" }
        <div className="profile-user-info">
        <h3>Username: {user.username}</h3>
        <h3>Email: {user.email}</h3>
        </div>
        <button className="profile-btn" onClick={openEditPopup}>Edit</button>
      </div>

      <div className="liked-posts">
        { likedPosts.length === 0 ? <h1 style={{ fontSize: "1rem" }}>No liked posts yet.. Get busy!</h1> :
          <div className="liked-posts">
            <h3>Liked Posts</h3>
            {likedPosts.map(post => (
              <div className="post profile-post" key={post.id}>
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
          </div> }
      </div>
    </div>
    
    {/* Edit Popup */}
    <AnimatePresence>
    { showEditPopup ? <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="edit-popup">
      <div className="popup-header edit-popup-container">
        <h2>Edit Info</h2>
        <ImCross className="exit-btn" onClick={closeEditPopup} />
      </div>

      <div className="edit-input-items edit-popup-container">
        <input type="text" placeholder='Username' onChange={(e) => setNewUserInfo({...newUserInfo, username: e.currentTarget.value})}/>
        <input type="text" placeholder='Email' onChange={(e) => setNewUserInfo({...newUserInfo, email: e.currentTarget.value})}/>
        <button className="btn edit-submit" onClick={editUserInfo}>Submit</button>
      </div>
    </motion.div> : "" }
    </AnimatePresence>

    { pfpAlert ? <h2 className="pfp-alert">New profile picture has been set!</h2> : ""}
    { editAlert ? <h2 className="edit-alert">New user info changed!</h2> : ""}
    {/* <h2 className="back-to-home">Back to <Link to="/">Home</Link></h2>
    <section className="profile profile-container">

        <div className="profile-flex">
        <div className="profile-img">
            <img className="edit-pfp" src={ loadedUserImage ? loadedUserImage : placeholderPFP} alt="" />
            <br />
            <input className='pfp-input' type="file" onChange={(e) => {
        const file = e.target.files[0];
        setUserImage(file);
        setConfirmImg(true)
        }}/>
        <br />
        { confirmImg ? <button className="btn pfp-confirm" onClick={setPfp}>Confirm</button> : ""}

        </div>

        <div className="profile-info">
            <h2>Email: <span className="primary-blue">{user.email}</span></h2>
            <h2>Username: <span className="primary-blue">{user.username}</span></h2>

            <div className="profile-btn">
            <button onClick={openEditPopup}>Edit</button>
            </div>
        </div>
        </div>

        { pfpAlert ? <h2 className="pfp-alert">New profile picture has been set!</h2> : ""}

        <div className="liked-posts">
        <h2>Liked Posts</h2>
        { likedPosts.length === 0 ? <p className="home-container">No Liked posts yet. Get busy!</p> : ""}
        <div className="liked-posts">
        {likedPosts.map(post => (
            <div className="profile-post" key={post.id}>
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
        </div>
        </div>
    </section>

    <AnimatePresence>
    { showEditPopup ? <motion.form initial={{opacity: 0 }} animate={{ opacity: 1 }} exit={{opacity: 0}} onSubmit={editUserInfo} className="edit-popup">
        <div className="profile-container">
        <div className="edit-popup-header">
            <h2>Edit Profile</h2>
            <ImCross onClick={closeEditPopup} className="cross-btn" />
        </div>
        <div className="edit-input-items">
        <input type="text" placeholder='Username' onChange={(e) => setNewUserInfo({...newUserInfo, username: e.currentTarget.value})}/>
        <input type="text" placeholder='Email' onChange={(e) => setNewUserInfo({...newUserInfo, email: e.currentTarget.value})}/>
        </div>

        <button className="edit-btn btn-full">Submit</button>
        </div>

        { editAlert ? <h2 className="edit-alert">New user info changed!</h2> : ""}
    </motion.form> : ""}
    </AnimatePresence> */}
    </>
  )
}

export default Profile