import React, { useState, useContext } from 'react'
import TempPFP from '../../assets/temp-pfp.jpg'
import { Link } from 'react-router-dom'
// React Icons
import { GoHome } from 'react-icons/go'
import { BsSearch, BsFillPeopleFill, BsChatDots, BsBell, BsTools, BsThreeDots } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { TbRefreshAlert } from 'react-icons/tb'
import { VscFeedback } from 'react-icons/vsc'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import {IoIosArrowDown} from 'react-icons/io';      
// Images
import pfp1 from '../../assets/pfp-1.jpg'
import pfp2 from '../../assets/pfp-2.jpg'
import pfp3 from '../../assets/pfp-3.jpg'
import pfp4 from '../../assets/pfp-4.jpg'
import placeholderPFP from '../../assets/placeholder-pfp.png'
// Framer Motion
import { motion, AnimatePresence } from "framer-motion"
import { UserContext } from '../../context/User'
import './nav.css'

const Nav = () => {
    // State
    const [profileDropdown, setProfileDropdown] = useState(false);
    const [notificationDropdown, setNotificationDropdown] = useState(false);

    // Context
    const [user, setUser] = useContext(UserContext);

    // Functions
    const openProfile = () => {
        setProfileDropdown(!profileDropdown);
      }
    
      const openNotifications = () => {
        setNotificationDropdown(!notificationDropdown);
      }
    
      const closeDropdown = () => {
        setNotificationDropdown(false);
        setProfileDropdown(false);
      }

  return (
    // Overlay
    <>
    { profileDropdown || notificationDropdown ? <div className="overlay" onClick={closeDropdown}></div> : ''}
    <div className="home-nav">
      <div className="home-container home-nav-flex">

      <div className="logo-and-search">
        <Link to="/">
        <svg width="50" height="50" viewBox="0 0 630 514" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 454.31C9 451.81 271 175.31 180 34.3104C89 -106.69 303 512.81 365.5 438.81C428 364.81 422.5 -34.1896 456.5 5.8104C490.5 45.8104 544 518.31 629 511.31" stroke="#FF6884" strokeWidth="20"/>
          </svg>
          </Link>

          <div className="nav-search">
            <BsSearch className="search-icon" />
          <input type="text" className="" placeholder="Search" />
          </div>
      </div>

      <div className="nav-options">
        <div className="nav-option">
          <GoHome className="nav-icon" />
          <h4>Homepage</h4>
        </div>

        <div className="nav-option">
          <BsFillPeopleFill className="nav-icon" />
          <h4>Connections</h4>
        </div>

        <div className="nav-option">
          <BsChatDots className="nav-icon" />
          <h4>Messages</h4>
        </div>

        <div className={ notificationDropdown ? "nav-option notif-active" : "nav-option notif"} onClick={openNotifications}>
          <BsBell className={ notificationDropdown ? "icon-active" : "nav-icon"}/>
          <h4>Notifications</h4>

          <div className="notif-notification">
              <p>9</p>
            </div>
          </div>

          <AnimatePresence>
          { notificationDropdown ? <motion.div initial={{ x: '100px' }} animate={{ x: '0px' }} exit={{ y: '100px', opacity: 0 }} className="notifications-dropdown">
            <div className="home-container">
            <div className="notif-dropdown-header">
              <h3>Notifications</h3>
              <h4>Read all</h4>
            </div>

            <small>New</small>

            <div className="notification-items">
              <div className="notification-item">
                <img src={pfp4} alt="" />

                <div>
                  <p>
                  Caspian Duffy added 4 new photos.
                  </p>
                  <small>14 min.</small>
                </div>

                <BsThreeDots />
              </div>
              
              <div className="notification-item">
                <img src={TempPFP} alt="" />

                <div>
                  <p>
                  Avni Farrell, uploaded 3 new posts.
                  </p>
                  <small>14 min.</small>
                </div>

                <BsThreeDots />
              </div>

              <div className="notification-item">
                <img src={pfp4} alt="" />

                <div>
                  <p>
                  Caspian Duffy, accepted your friend request.
                  </p>
                  <small>14 min.</small>
                </div>
              
              <BsThreeDots />
              </div>

              <div className="notification-item">
                <img src={TempPFP} alt="" />

                <div>
                  <p>
                  Avni Farrell, added 14 new photos.
                  </p>
                  <small>14 min.</small>
                </div>
              
              <BsThreeDots />
              </div>
            </div>

            <small>Previous</small>

            <div className="notification-item">
                <img src={TempPFP} alt="" />

                <div>
                  <p>
                  Avni Farrell, changed their profile picture.
                  </p>
                  <small>14 min.</small>
                </div>
              
              <BsThreeDots />
              </div>

              <div className="notification-item">
                <img src={TempPFP} alt="" />

                <div>
                  <p>
                  Avni Farrell, accepted your friend request.
                  </p>
                  <small>14 min.</small>
                </div>
              
              <BsThreeDots />
              </div>
              
          </div>
          </motion.div> : ''}
          </AnimatePresence>

        <div className="nav-option">
          <BsTools className="nav-icon" />
          <h4>Tools</h4>
        </div>
      </div>

      <div className="profile-dropdown-container">
        <div className="profile-dropdown" onClick={openProfile}>
        <img src={ user.pfp ? user.pfp : placeholderPFP } className="profile-dropdown-img" alt="" />
        <h4>{user.username}</h4>
        <IoIosArrowDown className="primary-pink" />
        </div>

        <AnimatePresence>
        { profileDropdown ? <motion.div initial={{ x: '-100px' }} animate={{ x: '0px' }} exit={{ y: '100px', opacity: 0}} className="dropped-profile">
          <div className="home-container">
          <h2>Profile</h2>

          <div className="dropdown-components">
            <Link to="/profile">
            <div className="dropdown-component">
              <CgProfile className="dropdown-icon" />
              <h4>My Profile</h4>
            </div>
            </Link>

            <div className="dropdown-component">
              <TbRefreshAlert className="dropdown-icon" />
              <h4>Change Account</h4>
            </div>

            <div className="dropdown-component">
              <FiSettings className="dropdown-icon" />
              <h4>Settings</h4>
            </div>

            <div className="dropdown-component">
              <AiOutlineQuestionCircle className="dropdown-icon" />
              <h4>Help</h4>
            </div>

            <div className="dropdown-component">
              <VscFeedback className="dropdown-icon" />
              <h4>Give Feedback</h4>
            </div>
          </div>
          </div>
        </motion.div> : ''}
        </AnimatePresence>
      </div>

      </div>
    </div>
    </>
  )
}

export default Nav